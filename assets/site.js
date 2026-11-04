/* TechBites Fetch site: EN/AR switch (Arabic is in the HTML), nav rail highlight, mobile menu, screenshot tabs. */
(function () {
    'use strict';
    var root = document.documentElement;
    var langBtn = document.getElementById('lang');
    var EN = {
        kicker: 'Free Windows download manager by TechBites',
        headline: 'Download anything. Keep everything. Pay nothing.',
        lead: 'TechBites Fetch is a fast, free download manager for Windows. Videos, music, torrents, whole sites and big files, all in one clean app, with no account and no ads.',
        cta: 'Download for Windows', gh: 'View on GitHub',
        meta: 'Free forever · Windows 10/11 · Updates itself',
        altHero: 'TechBites Fetch downloads list: one file downloading over 8 connections and one completed file',
        t1: '100% free', t1d: 'Not a trial, not freemium.',
        t2: 'No account', t2d: 'Nothing to sign up for.',
        t3: 'Private', t3d: 'Your links, files and torrents are never sent to us.',
        t4: 'Open updates', t4d: 'New versions come from our public GitHub repo.',
        t5: 'Signed installer', t5d: 'Published by Samir Masoud.',
        featH: 'Everything you download, in one place',
        f1h: 'Fast file downloads', f1p: 'Big files are split into parts that download at the same time, and a part that finishes early helps the slowest one. Pause and resume any time, even after a restart. If your network drops, it waits and carries on.',
        f2h: 'Video and audio', f2p: 'Paste a page link and the app lists every quality and format. Video or audio only, full playlists, embedded subtitles and HLS streams. Powered by yt-dlp and FFmpeg, which update themselves.',
        f3h: 'Torrents', f3p: 'Magnet links and .torrent files. Choose files before you start, pause, resume and recheck, and stop seeding at a ratio or a time.',
        f4h: 'Browser integration', f4p: 'Extensions for Chrome, Edge, Brave and Firefox, set up with one click from the first-run screen. Downloads go to the app, and a video button on supported pages lists the qualities.',
        f5h: 'Site Grabber', f5p: 'Give it a start page and it explores the site and lists every file it finds. Control depth, pages and filters. It respects robots.txt.',
        f6h: 'Queues and scheduling', f6p: 'Organised lists, a scheduler with start times and days of the week, and control over how many downloads run at once. Automatic category folders too.',
        moreH: 'All features',
        m1: 'Smart retry when a server answers 401/403, and refresh an expired link without starting over.',
        m2: 'Per-site connection limits and speed presets (low-end, mobile, fast fibre).',
        m3: 'Data usage: video and audio, torrent downloads and uploads, with a monthly budget and renewal date.',
        m4: 'Metered network profiles: limit speed, limit parallel jobs, or block torrents.',
        m5: 'Filename templates (date, category, title, domain, resolution).',
        m6: 'Pop-ups when a download starts and finishes, and you choose what happens next.',
        m7: 'Proxy support and security options. Files can never be written outside your chosen folder.',
        m8: 'Modern Windows 11 look in dark and light, in English and Arabic with true right-to-left layout.',
        galH: 'Inside the app',
        altMedia: 'Media page: paste a video or audio link and analyze it', capMedia: 'Paste a video or audio link and pick the quality',
        altTorrents: 'Torrents page with add torrent or magnet', capTorrents: 'Torrents and magnets in the same app',
        altAdd: 'Add download dialog: link and save folder', capAdd: 'Paste the link and choose where to save',
        howH: 'Three steps',
        s1h: 'Download', s1p: 'Run the installer. No sign-up.',
        s2h: 'Paste', s2p: 'Paste a link, drop a torrent, or let the browser extension catch the download.',
        s3h: 'Relax', s3p: 'Fetch splits, resumes, merges and organises it, then updates itself later.',
        privH: 'Your downloads are your business',
        p1: 'No tracking of the links you download, the files you save or the torrents you join.',
        p2: 'No account, no device ID, no license server.',
        p3: 'Browser cookies you import for private sites are encrypted on your PC with Windows DPAPI and never uploaded.',
        p4: 'Anonymous crash reports (Sentry) with usernames and URL queries removed, so bugs can be fixed.',
        p5: 'Update checks are plain requests to GitHub. Nothing else about you is sent.',
        donH: 'Free for everyone, powered by people like you',
        donP: 'TechBites Fetch is free and always will be. There are no ads, no locked features and no subscriptions. It is built and maintained by one creator, Samir Masoud. If the app saves you time, a small donation keeps it updated, keeps yt-dlp and FFmpeg support current, and pays for new features. Donating is optional. Sharing the app helps just as much.',
        ipn: 'InstaPay (Egypt)', kofi: 'Support on Ko-fi', discord: 'Join the Discord', yt: 'Subscribe on YouTube',
        donMore: 'Other free ways to help: star the repo, share it with a friend, or report bugs on GitHub.',
        dlH: 'Get TechBites Fetch',
        dlReq: 'Windows 10 (version 1809 or newer) or Windows 11, 64-bit. About 1 GB free for the app and its media tools, plus an internet connection.',
        allVer: 'All versions and release notes',
        i1: 'On the release page, download TechBitesDownloader-win-Setup.exe and run it.',
        i2: 'If Windows SmartScreen shows a warning, click More info, then Run anyway. The installer is signed by Samir Masoud, and new apps take time to build SmartScreen reputation.',
        i3: 'Follow the first-run screen to connect your browsers.',
        i4: 'The app updates itself. You never need to download it again.',
        faqH: 'FAQ',
        q1: 'Is it really free?', a1: 'Yes. No trial, no ads, no account. Donations are optional.',
        q2: 'How do you make money?', a2: 'Donations only. There is nothing to sell, and the app collects no personal data.',
        q3: 'Is it safe?', a3: 'The installer is code-signed and published from the public repo, every release is hash-verified, and the app is protected against tampering.',
        q4: 'Does it work on Mac or Linux?', a4: 'Not yet. Windows only.',
        q5: 'Which sites are supported?', a5: 'Thousands of video and audio sites through yt-dlp, plus any direct file link, HLS stream, magnet link or .torrent file. DRM-protected streams (like Netflix) are not supported.',
        q6: 'Can it download from YouTube?', a6: 'Yes. The Media page and the browser extension use yt-dlp for the sites it supports. Only download content you have the right to save.',
        q7: 'Does it update itself?', a7: 'Yes. The app updates from GitHub releases, and yt-dlp and FFmpeg are refreshed on their own.',
        q8: 'Why does Windows warn me?', a8: 'Windows SmartScreen is cautious with newer apps. The installer is signed by Samir Masoud. Choose More info, then Run anyway.',
        q9: 'Where do my files go?', a9: 'To the folder you choose, sorted by category if you turn that on.',
        q10: 'How do I report a bug or ask for a feature?', a10: 'On GitHub Issues, or in the Discord.',
        legal: 'TechBites Fetch uses yt-dlp, FFmpeg and other open-source components.',
        skip: 'Skip to content', ctaShort: 'Download', menu: 'Menu',
        nHome: 'Home', nFeat: 'Features', nShots: 'Screenshots', nHow: 'How it works', nPriv: 'Privacy', nFaq: 'FAQ', nDonate: 'Donate', nDl: 'Download',
        kicker: 'Free download manager for Windows 10 and 11',
        featP: 'The core features of the app.', galP: 'Real screenshots from the current version.', howP: 'From install to your first file in a minute.',
        privLink: 'Read the full privacy policy', tabMedia: 'Media', tabTorrents: 'Torrents', tabAdd: 'Add download'
    };

    var nodes = document.querySelectorAll('[data-i18n]');
    var alts = document.querySelectorAll('[data-i18n-alt]');
    var AR = {}, ARALT = {};
    Array.prototype.forEach.call(nodes, function (el) { AR[el.getAttribute('data-i18n')] = el.textContent; });
    Array.prototype.forEach.call(alts, function (el) { ARALT[el.getAttribute('data-i18n-alt')] = el.getAttribute('alt'); });
    ARALT.altTorrents = 'صفحة التورنت مع زرار إضافة تورنت أو magnet';
    ARALT.altAdd = 'نافذة إضافة تنزيل: الرابط وفولدر الحفظ';
    var ARTITLE = document.title, ENTITLE = 'TechBites Fetch - Free Download Manager for Windows';
    function t(k) { return root.lang === 'en' ? (EN[k] || AR[k]) : AR[k]; }
    function talt(k) { return root.lang === 'en' ? (EN[k] || ARALT[k]) : ARALT[k]; }

    function apply(lang) {
        root.lang = lang; root.dir = lang === 'en' ? 'ltr' : 'rtl';
        Array.prototype.forEach.call(nodes, function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
        Array.prototype.forEach.call(alts, function (el) { el.setAttribute('alt', talt(el.getAttribute('data-i18n-alt'))); });
        document.title = lang === 'en' ? ENTITLE : ARTITLE;
        var other = lang === 'en' ? 'العربية' : 'English';
        langBtn.querySelector('span').textContent = other;
        langBtn.setAttribute('aria-label', other);
        langBtn.setAttribute('lang', lang === 'en' ? 'ar' : 'en');
        try { localStorage.setItem('fetch_lang', lang); } catch (_) {}
    }
    var saved = null;
    try { saved = localStorage.getItem('fetch_lang'); } catch (_) {}
    var initial = saved || (/^ar/i.test(navigator.language || '') ? 'ar' : 'en');
    if (initial === 'en') apply('en'); else apply('ar');
    langBtn.addEventListener('click', function () { apply(root.lang === 'en' ? 'ar' : 'en'); });

    /* mobile menu */
    var nav = document.getElementById('nav'), menu = document.getElementById('menu');
    function setMenu(open) { nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); }
    menu.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menu.focus(); } });

    /* nav rail: highlight the section in view */
    var links = nav.querySelectorAll('a[href^="#"]');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                Array.prototype.forEach.call(links, function (a) {
                    var on = a.getAttribute('href') === '#' + en.target.id;
                    a.classList.toggle('is-active', on);
                    if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        Array.prototype.forEach.call(document.querySelectorAll('main section[id]'), function (s) { io.observe(s); });
    }

    /* screenshot tabs */
    var tabs = document.querySelectorAll('.tabs [role="tab"]');
    var shot = document.querySelector('#shot img');
    function select(tab) {
        Array.prototype.forEach.call(tabs, function (b) { var on = b === tab; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; });
        shot.src = tab.getAttribute('data-src');
        shot.setAttribute('data-i18n-alt', tab.getAttribute('data-alt'));
        shot.setAttribute('alt', talt(tab.getAttribute('data-alt')) || '');
    }
    Array.prototype.forEach.call(tabs, function (b, i) {
        b.addEventListener('click', function () { select(b); });
        b.addEventListener('keydown', function (e) {
            var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
            if (!d) return;
            if (root.dir === 'rtl') d = -d;
            var n = tabs[(i + d + tabs.length) % tabs.length]; n.focus(); select(n);
        });
    });
})();
