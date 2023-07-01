const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, json, printf, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: "백엔드 맛보기",
    }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    // 마지막으로 던지는 파라미터가 출력 form을 정해준다.
    printFormat
  ),
  console: combine(colorize(), simple()),
};

const opts = {
  file: new transports.File({
    // Console / File 와.... File로 하고 filename 을 주면 파일이 생성되고 그곳에 내가 원하는 규칙으로 로그를 찍을 수 있게 됨....ㄷ
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

module.exports = logger;
