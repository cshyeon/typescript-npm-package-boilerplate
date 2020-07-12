class ModuleB {
  /**
   * Just self return self introduce message
   */
  static intro(): String {
    return 'i am ModuleB';
  }
}

/**
 * callTest function just return text input parameter.
 * @param text - text to return
 */
function callTest(text: String): String {
  return text;
}
export default ModuleB;
