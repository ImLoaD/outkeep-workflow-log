const USER = {
  id: "1",
  name: "админов админ",
  fullName: "админов админ админович",
  email: "test.user@x-keeper.ru",
  initials: "АА",
};

const WORKFLOW_LABELS = {
  "7b1189b0-5b89-47ec-9a22-7c2df14bfd13": "Осмотр предмета лизинга",
  "9a70677d-a5af-483d-8391-8d0aa5077842": "Тестовый регламент",
};

const DEFAULT_DEVICE = {
  kind: "Смартфон",
  mode: "Мобильный",
  isMobile: true,
  os: "Android 14",
  browser: "Chrome Mobile 124",
  viewport: "390 x 844",
  appVersion: "CRM Field / PWA 1.18.0",
  userAgent: "Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 Chrome/124.0 Mobile Safari/537.36",
};

const RAW_EVENTS = [
  { id: "283", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmitted", at: "2026-04-27T05:29:20.000Z" },
  { id: "282", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "10", formTitle: "Идентификация ПЛ", submissionId: "87", isNew: false, isValid: true, at: "2026-04-27T05:29:14.000Z", fields: [{ key: "input_checkbox_3e9e", label: "Подтверждение личности", value: "TRUE" }] },
  { id: "281", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "6", formTitle: "Укажите детали сделки", submissionId: "92", isNew: true, isValid: true, at: "2026-04-27T05:28:50.000Z" },
  { id: "280", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "5", formTitle: "Подтвердите адрес", submissionId: "91", isNew: true, isValid: true, at: "2026-04-27T05:28:43.000Z" },
  { id: "279", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "4", formTitle: "Сделайте фото предмета лизинга", submissionId: "90", isNew: false, isValid: true, at: "2026-04-27T05:28:37.000Z" },
  { id: "278", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "fileUploadedToSubmission", formId: "4", formTitle: "Сделайте фото предмета лизинга", submissionId: "90", at: "2026-04-27T05:28:33.000Z", file: { name: "scan_app_k_dl_27-04-26_08-28-32-151.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_d713", requestFileId: "67", submissionFileId: "67" } },
  { id: "277", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "3", formTitle: "Сделайте фото идентификационных номеров", submissionId: "89", isNew: false, isValid: true, at: "2026-04-27T05:28:27.000Z" },
  { id: "276", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "fileDeletedFromSubmission", formId: "3", formTitle: "Сделайте фото идентификационных номеров", submissionId: "89", at: "2026-04-27T05:28:24.000Z", file: { name: "photo_pl_27-04-26_08-28-18-862.jpg", category: "Фото ПЛ", fieldKey: "input_photos_3c8c", requestFileId: "66", submissionFileId: "66" } },
  { id: "275", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "fileUploadedToSubmission", formId: "3", formTitle: "Сделайте фото идентификационных номеров", submissionId: "89", at: "2026-04-27T05:28:20.000Z", file: { name: "photo_pl_27-04-26_08-28-18-862.jpg", category: "Фото ПЛ", fieldKey: "input_photos_3c8c", requestFileId: "66", submissionFileId: "66" } },
  { id: "274", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "fileUploadedToSubmission", formId: "3", formTitle: "Сделайте фото идентификационных номеров", submissionId: "89", at: "2026-04-27T05:28:20.000Z", file: { name: "photo_pl_27-04-26_08-28-18-748.jpg", category: "Фото ПЛ", fieldKey: "input_photos_3c8c", requestFileId: "65", submissionFileId: "65" } },
  { id: "273", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "fileUploadedToSubmission", formId: "3", formTitle: "Сделайте фото идентификационных номеров", submissionId: "89", at: "2026-04-27T05:28:11.000Z", file: { name: "photo_pl_27-04-26_08-28-11-053.jpg", category: "Фото ПЛ", fieldKey: "input_photos_3c8c", requestFileId: "64", submissionFileId: "64" } },
  { id: "272", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "fileUploadedToSubmission", formId: "3", formTitle: "Сделайте фото идентификационных номеров", submissionId: "89", at: "2026-04-27T05:28:10.000Z", file: { name: "photo_pl_27-04-26_08-28-09-123.jpg", category: "Фото ПЛ", fieldKey: "input_photos_3c8c", requestFileId: "63", submissionFileId: "63" } },
  { id: "271", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "11", formTitle: "Проверка спецификации ПЛ", submissionId: "88", isNew: true, isValid: true, at: "2026-04-27T05:27:51.000Z", fields: [{ key: "input_checkbox_fb4e", label: "Спецификация проверена", value: "TRUE" }] },
  { id: "270", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "10", formTitle: "Идентификация ПЛ", submissionId: "87", isNew: true, isValid: false, at: "2026-04-27T05:27:46.000Z", fields: [{ key: "input_checkbox_3e9e", label: "Подтверждение личности", value: "FALSE" }] },
  { id: "269", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "9", formTitle: "Ввод данных", submissionId: "86", isNew: true, isValid: true, at: "2026-04-27T05:27:43.000Z", fields: [
    { key: "input_date_61fc", label: "Дата отгрузки", value: "2026-04-16" },
    { key: "input_radio_daf1", label: "Тип проверки", value: "ФМ" },
    { key: "input_number_8e01", label: "Количество", value: "22" },
    { key: "input_number_9bd9", label: "Приоритет", value: "1" },
    { key: "input_select_8780", label: "Маршрут", value: "Option 1 / o1" },
    { key: "input_string_6f0c", label: "Комментарий", value: "текст" },
    { key: "input_checkbox_095d", label: "Согласие получено", value: "TRUE" },
    { key: "input_datetime_b970", label: "Время встречи", value: "2026-04-14T19:22:00.000Z" },
  ] },
  { id: "268", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "8", formTitle: "Комментарии", submissionId: "85", isNew: true, isValid: true, at: "2026-04-27T05:27:00.000Z" },
  { id: "267", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "7", formTitle: "Все поля чек - вывод", submissionId: "84", isNew: true, isValid: true, at: "2026-04-27T05:26:56.000Z" },
  { id: "266", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "2", formTitle: "Идентификация ПЛ", submissionId: "83", isNew: true, isValid: true, at: "2026-04-27T05:26:53.000Z" },
  { id: "265", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowSubmissionSynced", formId: "1", formTitle: "Подтверждение возможности проведения осмотра", submissionId: "82", isNew: true, isValid: true, at: "2026-04-27T05:26:49.000Z" },
  { id: "264", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowInProgress", at: "2026-04-27T05:26:49.000Z" },
  { id: "263", workflowId: "7b1189b0-5b89-47ec-9a22-7c2df14bfd13", type: "requestWorkflowCreated", at: "2026-04-27T05:26:41.000Z" },
  { id: "262", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmitted", at: "2026-04-27T05:15:32.000Z" },
  { id: "261", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "81", formTitle: "Form 1", submissionId: "81", isNew: true, isValid: true, at: "2026-04-27T05:15:27.000Z", fields: [
    { key: "input_date_2407", label: "Дата", value: "2026-04-10" },
    { key: "input_radio_c0aa", label: "Выбор", value: "Option 1" },
    { key: "input_number_71be", label: "Число", value: "2" },
    { key: "input_select_a330", label: "Справочник", value: "Option 2 / option_2" },
    { key: "input_string_1847", label: "Строка", value: "1" },
    { key: "input_checkbox_1ba2", label: "Чекбокс", value: "TRUE" },
    { key: "input_datetime_e115", label: "Дата и время", value: "2024-12-12T19:22:00.000Z" },
    { key: "input_multiselect_154c", label: "Мультивыбор", value: "Option 1 / option_1" },
  ] },
  { id: "260", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "80", formTitle: "Form 9", submissionId: "80", isNew: false, isValid: true, at: "2026-04-27T05:14:53.000Z" },
  { id: "259", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileDeletedFromSubmission", formId: "80", formTitle: "Form 9", submissionId: "80", at: "2026-04-27T05:14:50.000Z", file: { name: "scan_app_k_dl_27-04-26_08-14-42-952.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_d9db", requestFileId: "60", submissionFileId: "60" } },
  { id: "258", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "80", formTitle: "Form 9", submissionId: "80", at: "2026-04-27T05:14:45.000Z", file: { name: "scan_app_k_dl_27-04-26_08-14-43-045.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_d9db", requestFileId: "62", submissionFileId: "62" } },
  { id: "257", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "80", formTitle: "Form 9", submissionId: "80", at: "2026-04-27T05:14:45.000Z", file: { name: "scan_app_k_dl_27-04-26_08-14-43-038.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_d9db", requestFileId: "61", submissionFileId: "61" } },
  { id: "256", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "80", formTitle: "Form 9", submissionId: "80", at: "2026-04-27T05:14:45.000Z", file: { name: "scan_app_k_dl_27-04-26_08-14-42-952.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_d9db", requestFileId: "60", submissionFileId: "60" } },
  { id: "255", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "80", formTitle: "Form 9", submissionId: "80", at: "2026-04-27T05:14:34.000Z", file: { name: "scan_app_k_dl_27-04-26_08-14-33-192.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_d9db", requestFileId: "59", submissionFileId: "59" } },
  { id: "254", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "79", formTitle: "Form 8", submissionId: "79", isNew: true, isValid: true, at: "2026-04-27T05:14:24.000Z", fields: [{ key: "input_radio_11a3", label: "Выбор", value: "Option 1" }] },
  { id: "253", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "78", formTitle: "Form 7", submissionId: "78", isNew: true, isValid: true, at: "2026-04-27T05:14:16.000Z", fields: [{ key: "input_checkbox_0950", label: "Подтверждение", value: "TRUE" }] },
  { id: "252", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "77", formTitle: "Form 6", submissionId: "77", isNew: true, isValid: true, at: "2026-04-27T05:14:11.000Z", fields: [{ key: "input_multiselect_651f", label: "Мультивыбор", value: "Option 1 / option_1, Option 2 / option_2" }] },
  { id: "251", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "76", formTitle: "Form 5", submissionId: "76", isNew: true, isValid: true, at: "2026-04-27T05:14:05.000Z" },
  { id: "250", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "75", formTitle: "Form 4", submissionId: "75", isNew: true, isValid: true, at: "2026-04-27T05:13:57.000Z" },
  { id: "249", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "74", formTitle: "Form 3", submissionId: "74", isNew: true, isValid: true, at: "2026-04-27T05:13:50.000Z", fields: [{ key: "input_date_c7b1", label: "Дата", value: "2026-04-10" }] },
  { id: "248", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "73", formTitle: "Form 2", submissionId: "73", isNew: true, isValid: true, at: "2026-04-27T05:13:42.000Z", fields: [{ key: "input_number_9f55", label: "Число", value: "2" }] },
  { id: "247", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "72", formTitle: "Form 1", submissionId: "72", isNew: true, isValid: true, at: "2026-04-27T05:13:34.000Z", fields: [{ key: "input_string_01b3", label: "Строка", value: "текс1" }] },
  { id: "246", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowSubmissionSynced", formId: "71", formTitle: "Form 1", submissionId: "71", isNew: false, isValid: true, at: "2026-04-27T05:13:26.000Z", fields: [
    { key: "input_radio_0285", label: "Выбор", value: "Option 1" },
    { key: "input_number_152f", label: "Число", value: "1" },
    { key: "input_select_8530", label: "Справочник", value: "Option 1 / option_1" },
    { key: "input_string_1d81", label: "Строка 1", value: "34" },
    { key: "input_string_8222", label: "Строка 2", value: "текст" },
    { key: "input_string_82df", label: "Строка 3", value: "12" },
    { key: "input_checkbox_5f35", label: "Подтверждение", value: "TRUE" },
    { key: "input_datetime_4006", label: "Дата и время", value: "2024-12-12T19:22:00.000Z" },
    { key: "input_multiselect_be9e", label: "Мультивыбор", value: "Option 2 / option_2" },
  ] },
  { id: "245", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowInProgress", at: "2026-04-27T05:13:26.000Z" },
  { id: "244", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileDeletedFromSubmission", formId: "71", formTitle: "Form 1", submissionId: "71", at: "2026-04-27T05:13:19.000Z", file: { name: "scan_app_k_dl_27-04-26_08-12-58-319.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_80b2", requestFileId: "57", submissionFileId: "57" } },
  { id: "243", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "71", formTitle: "Form 1", submissionId: "71", at: "2026-04-27T05:13:00.000Z", file: { name: "scan_app_k_dl_27-04-26_08-12-58-470.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_80b2", requestFileId: "58", submissionFileId: "58" } },
  { id: "242", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "71", formTitle: "Form 1", submissionId: "71", at: "2026-04-27T05:13:00.000Z", file: { name: "scan_app_k_dl_27-04-26_08-12-58-319.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_80b2", requestFileId: "57", submissionFileId: "57" } },
  { id: "241", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "71", formTitle: "Form 1", submissionId: "71", at: "2026-04-27T05:13:00.000Z", file: { name: "scan_app_k_dl_27-04-26_08-12-57-831.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_80b2", requestFileId: "56", submissionFileId: "56" } },
  { id: "240", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "fileUploadedToSubmission", formId: "71", formTitle: "Form 1", submissionId: "71", at: "2026-04-27T05:12:46.000Z", file: { name: "scan_app_k_dl_27-04-26_08-12-43-815.jpg", category: "Скан АПП к ДЛ", fieldKey: "input_photos_80b2", requestFileId: "55", submissionFileId: "55" } },
  { id: "239", workflowId: "9a70677d-a5af-483d-8391-8d0aa5077842", type: "requestWorkflowCreated", at: "2026-04-27T05:11:21.000Z" },
];

const EVENT_COPY = {
  requestWorkflowCreated: { label: "Регламент создан", status: "создано", tone: "neutral", bucket: "system" },
  requestWorkflowInProgress: { label: "Регламент открыт", status: "в работе", tone: "warn", bucket: "system" },
  requestWorkflowSubmitted: { label: "Регламент отправлен", status: "готово", tone: "success", bucket: "system" },
  requestWorkflowSubmissionSynced: { label: "Форма синхронизирована", status: "валидно", tone: "success", bucket: "forms" },
  fileUploadedToSubmission: { label: "Файл добавлен", status: "загружено", tone: "success", bucket: "files" },
  fileDeletedFromSubmission: { label: "Файл удален", status: "удалено", tone: "warn", bucket: "files" },
  fileUploadGroup: { label: "Файлы добавлены", status: "загружено", tone: "success", bucket: "files" },
};

const state = {
  filter: "all",
  workflow: "all",
  query: "",
  hideQuiet: true,
  selectedId: null,
};

const eventRows = document.querySelector("#eventRows");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const workflowSelect = document.querySelector("#workflowSelect");
const quietToggle = document.querySelector("#quietToggle");

function normalizeEvent(event) {
  return {
    ...event,
    user: USER,
    fields: event.fields || [],
    files: event.file ? [event.file] : event.files || [],
    device: event.device || DEFAULT_DEVICE,
    isNew: Boolean(event.isNew),
    isValid: event.isValid ?? null,
    source: event.workflowId.startsWith("7b") ? "events5.csv" : "events4.csv",
  };
}

function groupFileUploads(events) {
  const sorted = events.map(normalizeEvent).sort((a, b) => Date.parse(b.at) - Date.parse(a.at));
  const groups = [];

  for (const event of sorted) {
    const last = groups[groups.length - 1];
    const canGroup = last
      && last.type === "fileUploadGroup"
      && event.type === "fileUploadedToSubmission"
      && last.workflowId === event.workflowId
      && last.formId === event.formId
      && last.submissionId === event.submissionId
      && Math.abs(Date.parse(last.at) - Date.parse(event.at)) <= 15000;

    if (canGroup) {
      last.ids.push(event.id);
      last.files.push(...event.files);
      last.lastAt = event.at;
      continue;
    }

    if (event.type === "fileUploadedToSubmission") {
      groups.push({
        ...event,
        id: `upload-${event.id}`,
        ids: [event.id],
        type: "fileUploadGroup",
        files: [...event.files],
        lastAt: event.at,
      });
    } else {
      groups.push(event);
    }
  }

  return groups;
}

const EVENTS = groupFileUploads(RAW_EVENTS);

function initWorkflowSelect() {
  const workflows = [...new Set(EVENTS.map((event) => event.workflowId))];
  workflowSelect.insertAdjacentHTML(
    "beforeend",
    workflows.map((id) => `<option value="${escapeAttr(id)}">${escapeHtml(WORKFLOW_LABELS[id] || compactId(id, 8))}</option>`).join(""),
  );
}

function eventInfo(event) {
  const info = EVENT_COPY[event.type] || { label: event.type, status: "событие", tone: "neutral", bucket: "system" };
  if (event.type === "requestWorkflowSubmissionSynced" && event.isValid === false) {
    return { ...info, status: "ошибка", tone: "danger", bucket: "errors", label: "Валидация не пройдена" };
  }
  if (event.type === "requestWorkflowSubmissionSynced" && event.isValid === true && event.fields.length === 0 && event.isNew === false) {
    return { ...info, status: "без изменений", tone: "neutral", quiet: true };
  }
  return info;
}

function filterEvents() {
  const query = state.query.trim().toLowerCase();
  return EVENTS.filter((event) => {
    const info = eventInfo(event);
    if (state.workflow !== "all" && event.workflowId !== state.workflow) return false;
    if (state.hideQuiet && info.quiet) return false;
    if (state.filter === "errors" && info.tone !== "danger") return false;
    if (state.filter === "files" && info.bucket !== "files") return false;
    if (state.filter === "forms" && info.bucket !== "forms" && info.bucket !== "errors") return false;
    if (state.filter === "system" && info.bucket !== "system") return false;
    if (!query) return true;
    return searchable(event, info).includes(query);
  });
}

function searchable(event, info) {
  return [
    event.id,
    ...(event.ids || []),
    event.workflowId,
    WORKFLOW_LABELS[event.workflowId],
    event.type,
    info.label,
    event.formTitle,
    event.formId,
    event.submissionId,
    ...event.fields.flatMap((field) => [field.key, field.label, field.value]),
    ...event.files.flatMap((file) => [file.name, file.category, file.fieldKey, file.requestFileId]),
    event.device.kind,
    event.device.mode,
    event.device.os,
    event.device.browser,
    USER.name,
    USER.email,
  ].filter(Boolean).join(" ").toLowerCase();
}

function render() {
  const visible = filterEvents();
  eventRows.innerHTML = visible.map((event) => renderEventRow(event)).join("");
  emptyState.hidden = visible.length > 0;
  updateMetrics(visible);
  updateContext(visible);
}

function renderEventRow(event) {
  const info = eventInfo(event);
  const selected = state.selectedId === event.id;
  const details = selected ? renderDetails(event) : "";

  return `
    <tr class="log-row ${selected ? "selected" : ""}" data-id="${escapeAttr(event.id)}">
      <td>${renderTime(event)}</td>
      <td>${renderUser(event.user)}</td>
      <td>${renderAction(event, info)}</td>
      <td>${renderEntity(event)}</td>
      <td><span class="status-pill ${info.tone}">${escapeHtml(statusText(event, info))}</span></td>
      <td>${renderMeta(event)}</td>
      <td><button class="row-action" type="button" data-toggle="${escapeAttr(event.id)}" aria-label="Открыть детали">...</button></td>
    </tr>
    ${details}
  `;
}

function renderTime(event) {
  const date = new Date(event.at);
  const local = date.toLocaleString("ru-RU", {
    timeZone: "Asia/Makassar",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const day = date.toLocaleDateString("ru-RU", { timeZone: "Asia/Makassar", day: "2-digit", month: "2-digit" });
  return `
    <div class="time-stack inspectable" tabindex="0">
      <span class="primary mono">${escapeHtml(local)}</span>
      <span class="secondary mono">${escapeHtml(day)} UTC+8</span>
      <div class="popover">
        <div class="popover-title">Время</div>
        <dl class="kv">
          <dt>UTC</dt><dd>${escapeHtml(date.toISOString())}</dd>
          <dt>Локально</dt><dd>${escapeHtml(date.toLocaleString("ru-RU", { timeZone: "Asia/Makassar" }))}</dd>
          <dt>Относительно</dt><dd>${escapeHtml(relativeTime(date))}</dd>
          <dt>Raw-время</dt><dd>${escapeHtml(event.at)}</dd>
          <dt>ID события</dt><dd>${escapeHtml(String(event.id))}</dd>
        </dl>
      </div>
    </div>
  `;
}

function renderUser(user) {
  return `
    <div class="user-cell inspectable" tabindex="0">
      <span class="avatar avatar-photo" aria-hidden="true"></span>
      <span>
        <span class="primary">${escapeHtml(user.name)}</span>
        <span class="secondary">${escapeHtml(user.email)}</span>
      </span>
      <div class="popover">
        <div class="popover-title">Пользователь</div>
        <dl class="kv">
          <dt>ID</dt><dd>${escapeHtml(user.id)}</dd>
          <dt>ФИО</dt><dd>${escapeHtml(user.fullName)}</dd>
          <dt>Email</dt><dd>${escapeHtml(user.email)}</dd>
          <dt>Тип актора</dt><dd>пользователь</dd>
        </dl>
      </div>
    </div>
  `;
}

function renderAction(event, info) {
  const fileCount = event.files.length;
  const fieldCount = event.fields.length;
  const subtitle = event.type === "fileUploadGroup"
    ? `${fileCount} файла`
    : event.type === "fileDeletedFromSubmission"
      ? "удаление вложения"
      : fieldCount > 0
        ? `${fieldCount} полей`
        : event.isNew
          ? "новый сабмит"
          : event.type;

  return `
    <div class="event-kind">
      <span class="status-dot ${info.tone}"></span>
      <span>
        <span class="primary">${escapeHtml(info.label)}</span>
        <span class="secondary">${escapeHtml(subtitle)}</span>
      </span>
    </div>
  `;
}

function renderEntity(event) {
  const title = event.formTitle || WORKFLOW_LABELS[event.workflowId] || "Регламент";
  const subtitle = event.formId
    ? `форма ${event.formId} · сабмит ${event.submissionId || "n/a"}`
    : compactId(event.workflowId, 12);
  return `
    <span class="primary">${escapeHtml(title)}</span>
    <span class="secondary mono">${escapeHtml(subtitle)}</span>
  `;
}

function renderMeta(event) {
  const tokens = [];
  tokens.push(metaToken("регл", compactId(event.workflowId, 8), workflowPopover(event)));
  if (event.formId) tokens.push(metaToken("форма", event.formId, idsPopover(event)));
  if (event.fields.length) tokens.push(metaToken("поля", String(event.fields.length), fieldsPopover(event), "blue"));
  if (event.files.length) tokens.push(metaToken("файлы", String(event.files.length), filesPopover(event), "warn"));
  tokens.push(metaToken("устр", event.device.isMobile ? "моб." : "дескт.", devicePopover(event)));
  tokens.push(metaToken("ист", event.source, sourcePopover(event)));
  return `<div class="meta-list">${tokens.join("")}</div>`;
}

function metaToken(label, value, popover, tone = "") {
  return `
    <span class="meta-token inspectable ${tone}" tabindex="0">
      ${escapeHtml(label)}&nbsp;<strong>${escapeHtml(value)}</strong>
      <span class="popover right">${popover}</span>
    </span>
  `;
}

function workflowPopover(event) {
  return `
    <div class="popover-title">Регламент</div>
    <dl class="kv">
      <dt>Название</dt><dd>${escapeHtml(WORKFLOW_LABELS[event.workflowId] || "n/a")}</dd>
      <dt>ID</dt><dd>${escapeHtml(event.workflowId)}</dd>
      <dt>Заявка</dt><dd>REQ-4821</dd>
    </dl>
  `;
}

function idsPopover(event) {
  return `
    <div class="popover-title">Идентификаторы</div>
    <dl class="kv">
      <dt>ID формы</dt><dd>${escapeHtml(event.formId || "n/a")}</dd>
      <dt>ID сабмита</dt><dd>${escapeHtml(event.submissionId || "n/a")}</dd>
      <dt>ID события</dt><dd>${escapeHtml(String(event.id))}</dd>
      <dt>Raw-тип</dt><dd>${escapeHtml(event.type)}</dd>
    </dl>
  `;
}

function fieldsPopover(event) {
  return `
    <div class="popover-title">Поля формы</div>
    <dl class="kv">
      ${event.fields.slice(0, 6).map((field) => `<dt>${escapeHtml(field.key)}</dt><dd>${escapeHtml(field.value)}</dd>`).join("")}
      ${event.fields.length > 6 ? `<dt>Еще</dt><dd>${event.fields.length - 6} полей</dd>` : ""}
    </dl>
  `;
}

function filesPopover(event) {
  return `
    <div class="popover-title">Файлы</div>
    <dl class="kv">
      ${event.files.slice(0, 5).map((file) => `<dt>${escapeHtml(file.category || "файл")}</dt><dd>${escapeHtml(file.name)}</dd>`).join("")}
      ${event.files.length > 5 ? `<dt>Еще</dt><dd>${event.files.length - 5} файлов</dd>` : ""}
    </dl>
  `;
}

function devicePopover(event) {
  const device = event.device;
  return `
    <div class="popover-title">Устройство</div>
    <dl class="kv">
      <dt>Тип</dt><dd>${escapeHtml(device.kind)}</dd>
      <dt>Режим</dt><dd>${escapeHtml(device.mode)}</dd>
      <dt>Мобильный</dt><dd>${device.isMobile ? "да" : "нет"}</dd>
      <dt>ОС</dt><dd>${escapeHtml(device.os)}</dd>
      <dt>Браузер</dt><dd>${escapeHtml(device.browser)}</dd>
      <dt>Viewport</dt><dd>${escapeHtml(device.viewport)}</dd>
      <dt>Версия</dt><dd>${escapeHtml(device.appVersion)}</dd>
      <dt>User-Agent</dt><dd>${escapeHtml(device.userAgent)}</dd>
    </dl>
  `;
}

function sourcePopover(event) {
  return `
    <div class="popover-title">Источник</div>
    <dl class="kv">
      <dt>CSV</dt><dd>${escapeHtml(event.source)}</dd>
      <dt>Исходные ID</dt><dd>${escapeHtml((event.ids || [event.id]).join(", "))}</dd>
      <dt>Raw-событие</dt><dd>${escapeHtml(event.type)}</dd>
    </dl>
  `;
}

function renderDetails(event) {
  return `
    <tr class="details-row">
      <td colspan="7">
        <div class="details-panel">
          <div class="detail-block">
            <h3>Данные формы</h3>
            <div class="field-list">
              ${event.fields.length ? event.fields.map(renderFieldRow).join("") : `<div class="field-row"><code>данные</code><span>нет измененных полей</span></div>`}
            </div>
          </div>
          <div class="detail-block">
            <h3>Файлы</h3>
            <div class="file-list">
              ${event.files.length ? event.files.map(renderFileRow).join("") : `<div class="file-row"><code>вложения</code><span>нет файлов</span></div>`}
            </div>
          </div>
          <div class="detail-block">
            <h3>Сырой лог</h3>
            <div class="raw-grid">
              <dl class="kv">
                <dt>Событие</dt><dd>${escapeHtml(event.type)}</dd>
                <dt>ID событий</dt><dd>${escapeHtml((event.ids || [event.id]).join(", "))}</dd>
                <dt>Регламент</dt><dd>${escapeHtml(event.workflowId)}</dd>
                <dt>Валидно</dt><dd>${escapeHtml(event.isValid === null ? "n/a" : String(event.isValid))}</dd>
                <dt>Создано</dt><dd>${escapeHtml(event.at)}</dd>
                <dt>Устройство</dt><dd>${escapeHtml(`${event.device.kind}, ${event.device.mode}`)}</dd>
              </dl>
            </div>
          </div>
        </div>
      </td>
    </tr>
  `;
}

function renderFieldRow(field) {
  return `
    <div class="field-row">
      <code>${escapeHtml(field.key)}</code>
      <span><strong>${escapeHtml(field.label)}:</strong> ${escapeHtml(field.value)}</span>
    </div>
  `;
}

function renderFileRow(file) {
  const kind = filePreviewKind(file);
  return `
    <div class="file-row">
      <code>${escapeHtml(file.fieldKey || "file")}</code>
      <span class="file-item">
        <span class="file-preview ${kind.className}" aria-hidden="true">
          <span class="file-type">${escapeHtml(kind.label)}</span>
          <span class="file-lines"></span>
        </span>
        <span class="file-copy">
          <strong>${escapeHtml(file.category || "Файл")}</strong>
          <span class="secondary">${escapeHtml(file.name)}</span>
        </span>
      </span>
    </div>
  `;
}

function filePreviewKind(file) {
  const value = `${file.name || ""} ${file.category || ""} ${file.requestFileId || ""}`.toLowerCase();
  if (value.includes("скан") || Number(file.requestFileId) % 2 === 0) {
    return { label: "PDF", className: "pdf" };
  }
  return { label: "DOC", className: "doc" };
}

function statusText(event, info) {
  if (info.tone === "danger") return "ошибка";
  if (event.type === "fileUploadGroup") return `${event.files.length} файла`;
  if (event.type === "requestWorkflowSubmissionSynced" && event.isValid === true) return "валидно";
  return info.status;
}

function updateMetrics(visible) {
  document.querySelector("#totalMetric").textContent = visible.length;
  document.querySelector("#successMetric").textContent = visible.filter((event) => eventInfo(event).tone === "success").length;
  document.querySelector("#errorMetric").textContent = visible.filter((event) => eventInfo(event).tone === "danger").length;
  document.querySelector("#fileMetric").textContent = visible.filter((event) => eventInfo(event).bucket === "files").length;
}

function updateContext(visible) {
  const workflows = [...new Set(visible.map((event) => event.workflowId))];
  const label = state.workflow === "all"
    ? `${workflows.length} регламента`
    : WORKFLOW_LABELS[state.workflow] || compactId(state.workflow, 8);
  document.querySelector("#contextWorkflow").textContent = label;
  document.querySelector("#contextCount").textContent = `${visible.length} строк`;
}

function relativeTime(date) {
  const base = new Date("2026-04-28T12:00:00+08:00");
  const diff = Math.round((base - date) / 60000);
  if (diff < 60) return `${diff} мин назад`;
  const hours = Math.floor(diff / 60);
  if (hours < 24) return `${hours} ч назад`;
  const days = Math.floor(hours / 24);
  return `${days} д назад`;
}

function compactId(value, size = 8) {
  if (!value) return "n/a";
  return value.length > size ? `${value.slice(0, size)}` : value;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

document.querySelector("#typeChips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-filter]");
  if (!chip) return;
  state.filter = chip.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === chip));
  state.selectedId = null;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.selectedId = null;
  render();
});

workflowSelect.addEventListener("change", (event) => {
  state.workflow = event.target.value;
  state.selectedId = null;
  render();
});

quietToggle.addEventListener("change", (event) => {
  state.hideQuiet = event.target.checked;
  state.selectedId = null;
  render();
});

document.querySelector(".density").addEventListener("click", (event) => {
  const button = event.target.closest("[data-density]");
  if (!button) return;
  document.body.classList.toggle("comfortable", button.dataset.density === "comfortable");
  document.querySelectorAll("[data-density]").forEach((item) => item.classList.toggle("active", item === button));
});

eventRows.addEventListener("click", (event) => {
  const action = event.target.closest("[data-toggle]");
  const row = event.target.closest(".log-row");
  const id = action?.dataset.toggle || row?.dataset.id;
  if (!id) return;
  state.selectedId = state.selectedId === id ? null : id;
  render();
});

document.addEventListener("click", async (event) => {
  const copy = event.target.closest("[data-copy]");
  if (!copy || !navigator.clipboard) return;
  await navigator.clipboard.writeText(copy.dataset.copy);
});

initWorkflowSelect();
state.selectedId = EVENTS.find((event) => eventInfo(event).tone === "danger")?.id || null;
render();
