function parts(string) {

    return string.split("@");
  }

  function emailParts(string)
  {
      let processed = string.toLowerCase();
      return parts(processed);
  }
  