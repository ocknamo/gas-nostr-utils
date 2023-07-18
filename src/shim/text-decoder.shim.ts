declare let Utilities: any;


class TextDecoderShim {
  public decode(data: Uint8Array):  string{
    return Utilities.newBlob(data).getDataAsString()
  }
}

export { TextDecoderShim as 'TextDecoder' }
