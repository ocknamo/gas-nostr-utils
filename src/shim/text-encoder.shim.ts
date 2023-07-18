declare let Utilities: any;


class TextEncoderShim {
  public encode(str: string): Uint8Array {
    return Uint8Array.from(Utilities.newBlob(str).getBytes())
  }
}

export { TextEncoderShim as 'TextEncoder' }
