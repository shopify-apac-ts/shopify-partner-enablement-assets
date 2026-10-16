(function () {
  "use strict";

  const events = window.learnShopifyEvents || [];
  const main = document.querySelector("[data-learn-shopify-page]");
  if (!main) return;

  const lang = document.documentElement.lang === "ja" ? "ja" : "en";
  const labels = lang === "ja" ? {
    eyebrow: "月例技術ウェビナー",
    seriesTitle: "Learn Shopify with PSE",
    archiveTitle: "2026年アーカイブ",
    online: "オンライン開催",
    session: "セッション",
    recording: "録画",
    recordingPending: "録画はWistiaへの移行後に追加します。",
    files: "セッション資料",
    filesPending: "旧アーカイブ内のファイルは移行準備中です。",
    notes: "補足・訂正",
    references: "紹介した資料・参考リンク",
    referencesIntro: "セッション内で紹介された外部資料です。リンク先の内容は変更される場合があります。",
    noFiles: "この回には個別のセッション資料は掲載されていません。",
    viewSession: "詳細を見る",
    back: "2026年アーカイブ",
    dateLocale: "ja-JP"
  } : {
    eyebrow: "Monthly technical webinar",
    seriesTitle: "Learn Shopify with PSE",
    archiveTitle: "2026 archive",
    online: "Online",
    session: "Session",
    recording: "Recording",
    recordingPending: "The recording will be added after migration to Wistia.",
    files: "Session files",
    filesPending: "Files embedded in the legacy archive are being prepared for migration.",
    notes: "Notes and corrections",
    references: "Resources and reference links",
    referencesIntro: "External resources introduced during the session. Content at these destinations may change.",
    noFiles: "No separate session files were listed for this event.",
    viewSession: "View session",
    back: "2026 archive",
    dateLocale: "en-GB"
  };

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function eventDate(event) {
    return new Intl.DateTimeFormat(labels.dateLocale, {
      year: "numeric",
      month: lang === "ja" ? "numeric" : "long",
      day: "numeric"
    }).format(new Date(event.date + "T00:00:00+09:00"));
  }

  function renderIndex() {
    main.append(
      element("p", "eyebrow", labels.eyebrow),
      element("h1", "page-title", labels.seriesTitle)
    );

    const section = element("section", "content-section");
    const heading = element("h2", "", labels.archiveTitle);
    heading.id = "archive-title";
    section.setAttribute("aria-labelledby", heading.id);
    section.append(heading);

    const list = element("ol", "entry-list archive-list");
    events.slice().reverse().forEach((event) => {
      const item = element("li", "directory-card");
      const meta = element("p", "metadata");
      const time = element("time", "", eventDate(event));
      time.dateTime = event.date;
      meta.append(time, document.createTextNode(" · " + labels.online));
      const title = element("h3");
      const link = element("a", "", `#${event.number} ${event.title}`);
      link.href = main.dataset.eventBase + event.slug + (lang === "ja" ? "/ja/" : "/");
      title.append(link);
      const summary = element("p", "", event.summary[lang]);
      const action = element("a", "action-link", labels.viewSession);
      action.href = link.href;
      item.append(meta, title, summary, action);
      list.append(item);
    });
    section.append(list);
    main.append(section);
  }

  function renderDetail(event) {
    const breadcrumbs = element("nav", "breadcrumbs");
    breadcrumbs.setAttribute("aria-label", lang === "ja" ? "パンくずリスト" : "Breadcrumb");
    const back = element("a", "", labels.back);
    back.href = main.dataset.seriesHome;
    breadcrumbs.append(back, document.createTextNode(" / "), element("span", "", `#${event.number}`));

    const title = `#${event.number} ${event.title}`;
    main.append(
      breadcrumbs,
      element("p", "eyebrow", labels.seriesTitle),
      element("h1", "page-title", title)
    );

    const meta = element("p", "metadata event-time");
    const date = element("time", "", eventDate(event));
    date.dateTime = event.date;
    meta.append(date, document.createTextNode(` · ${event.time} · ${labels.online}`));
    main.append(meta, element("p", "introduction", event.summary[lang]));

    const recording = element("section", "content-section");
    const recordingHeading = element("h2", "", labels.recording);
    recordingHeading.id = "recording-title";
    recording.setAttribute("aria-labelledby", recordingHeading.id);
    recording.append(recordingHeading, element("p", "media-placeholder", labels.recordingPending));
    main.append(recording);

    const files = element("section", "content-section");
    const filesHeading = element("h2", "", labels.files);
    filesHeading.id = "files-title";
    files.setAttribute("aria-labelledby", filesHeading.id);
    files.append(filesHeading);
    if (event.files && event.files.length) {
      files.append(element("p", "", labels.filesPending));
      const fileList = element("ul", "resource-links");
      event.files.forEach((file) => fileList.append(element("li", "", file)));
      files.append(fileList);
    } else {
      files.append(element("p", "empty-state", labels.noFiles));
    }
    main.append(files);

    if (event.notes && event.notes[lang] && event.notes[lang].length) {
      const notes = element("section", "content-section notice");
      const notesHeading = element("h2", "", labels.notes);
      notesHeading.id = "notes-title";
      notes.setAttribute("aria-labelledby", notesHeading.id);
      const notesList = element("ul", "resource-links");
      event.notes[lang].forEach((note) => notesList.append(element("li", "", note)));
      notes.append(notesHeading, notesList);
      main.append(notes);
    }

    const references = element("section", "content-section");
    const referencesHeading = element("h2", "", labels.references);
    referencesHeading.id = "references-title";
    references.setAttribute("aria-labelledby", referencesHeading.id);
    references.append(referencesHeading, element("p", "", labels.referencesIntro));
    const referenceList = element("ul", "reference-list");
    event.references.forEach((url) => {
      const item = element("li");
      const link = element("a", "", url);
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      item.append(link);
      referenceList.append(item);
    });
    references.append(referenceList);
    main.append(references);

    document.title = `${title} | ${labels.seriesTitle}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = event.summary[lang];
  }

  if (main.dataset.learnShopifyPage === "index") {
    renderIndex();
    return;
  }

  const number = Number(main.dataset.event);
  const event = events.find((item) => item.number === number);
  if (event) renderDetail(event);
}());
