export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text successfully copied to clipboard!");
  } catch (err) {
    console.error("Could not copy text: ", err);
    if (document.execCommand) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      console.log("Text copied using fallback method.");
    } else {
      alert("Failed to copy. Please manually copy the following:\n" + text);
    }
  }
}
