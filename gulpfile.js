let gulp        = require('gulp'),
    prefixer    = require('gulp-autoprefixer'),
    uglify      = require('gulp-uglify'),
    sass        = require('gulp-sass'),
    babel		= require('gulp-babel'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    cleanCSS    = require('gulp-clean-css')
    browserSync = require('browser-sync'),
    rigger      = require('gulp-rigger'),
    sourcemaps  = require('gulp-sourcemaps'),
    rimraf      = require('rimraf'),
    watch       = require('gulp-watch'),
    plumber     = require('gulp-plumber'),
    gutil       = require('gulp-util'),
    reload      = browserSync.reload;

let path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/css/main.sass',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.sass',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

let config = {
    server: {
        baseDir: "./build"
    },
    //tunnel: true,
    host: 'localhost',
    port: 3030,
    logPrefix: "in-dagestan"
};

gulp.task('html:build', () => {
    gulp.src(path.src.html)
    .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
});

gulp.task('js:build', () => {
    gulp.src(path.src.js)
    .pipe(plumber())
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream: true }));
});

gulp.task('style:build', () => {
    gulp.src(path.src.style)
    .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
});

gulp.task('image:build', () => {
    gulp.src(path.src.img)
    .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            svgPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', () => {
    gulp.src(path.src.fonts)
    .pipe(plumber())
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', () => {
    watch([path.watch.html], (event, cb) => {
        gulp.start('html:build');
    });
    watch([path.watch.style], (event, cb) => {
        gulp.start('style:build');
    });
    watch([path.watch.js], (event, cb) => {
        gulp.start('js:build');
    });
    watch([path.watch.img], (event, cb) => {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], (event, cb) => {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', () => {
    browserSync(config);
});

gulp.task('clean', cb => {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);