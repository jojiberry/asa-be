class RequestInvalidError extends Error {
    public constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, RequestInvalidError.prototype);
    }
  }
  
  export { RequestInvalidError };