export class BaseLogger {
  log() {}
}

export class ConsoleLogger implements BaseLogger {
  log() {
    console.log('Console Logger');
  }
}

export class ErrorLogger implements BaseLogger {
  log() {
    console.error('Error Logger');
  }
}
