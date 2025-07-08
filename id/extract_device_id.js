// ========== שלב 1: חילוץ שם הקובץ ==========
let filePath = engines.myEngine().getSource().toString();
let fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

// ========== שלב 2: חילוץ deviceId מתוך שם הקובץ ==========
let deviceId = fileName.replace(".js", "").replace("TikTokAgent_", "");

// ========== שלב 3: שמירה או שימוש ==========
toast("Device ID: " + deviceId);
log("Device ID: " + deviceId);

// שמירה לקובץ במכשיר
files.write("/sdcard/device_id.txt", deviceId);

// שמירה בגלובל אם יש צורך בהמשך סקריפט
globalThis.deviceId = deviceId;
