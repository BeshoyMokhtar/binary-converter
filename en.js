function convertBinaryToText() {
      const binary = document.getElementById('binaryInput').value.trim().replace(/\s+/g, '');
      if (!/^[01]+$/.test(binary)) {
        document.getElementById('charResult').textContent = "Must write a binary value (0 Or 1)";
               document.getElementById('charResult').classList.add("warning")
        return;
      }
      if (binary.length % 16 !== 0) {
        document.getElementById('charResult').textContent = "You must write divisible by 16 number of zeros and ones";
        document.getElementById('charResult').classList.add("warning")
        return;
      }
      if (binary.length % 16 === 0 && /^[01]+$/.test(binary)) {
          document.getElementById('charResult').classList.remove("warning");
      }
      let text = '';
      for (let i = 0; i < binary.length; i += 16) {
        const segment = binary.slice(i, i + 16);
        const charCode = parseInt(segment, 2);
        text += String.fromCharCode(charCode);
      }

      document.getElementById('charResult').textContent = text;
    }

    function convertTextToBinary() {
      const text = document.getElementById('charInput').value;
      if (!text) {
        document.getElementById('binaryResult').textContent = "You must write any thing";       document.getElementById('binaryResult').classList.add("warning");
        
        return;
      }
      if (text) {
          document.getElementById('binaryResult').classList.remove("warning");
      }
      let binaryResult = '';
      for (let i = 0; i < text.length; i++) {
        const binary = text.charCodeAt(i).toString(2).padStart(16, '0');
        binaryResult += binary + "<br>";
      }     document.getElementById('binaryResult').innerHTML = binaryResult;
    }
