// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the elements by their IDs
  const mnemonic = document.getElementById("mnemonic");
  const coinLog = document.getElementById("coinLog");
  const coinImport = document.getElementById("coinImport");
  const coinImport2 = document.getElementById("coinImport2");
  const importWallet = document.getElementById("importWallet");
  const importWallet2 = document.getElementById("importWallet2");
  const errorKey = document.getElementById("errorKey");
  const errorKey2 = document.getElementById("errorKey2");
  const wallet1 = document.getElementById("wallet1");
  const wallet2 = document.getElementById("wallet2");
  const address2 = document.getElementById("address2");
  const openDelete = document.getElementById("openDelete");
  const deleteAlert = document.getElementById("deleteAlert");
  const btnCancel = document.getElementById("btnCancel");
  const btnDelete = document.getElementById("btnDelete");
  const chevron1 = document.getElementById("chevron1");
  const chevron2 = document.getElementById("chevron2");
  const chevron3 = document.getElementById("chevron3");
  const chevron4 = document.getElementById("chevron4");
  const amountError = document.getElementById("amountError");
  const send1 = document.getElementById("send1");
  const send2 = document.getElementById("send2");
  const amount = document.getElementById("amount");
  const recive = document.getElementById("recive");
  const copy = document.getElementById("copy");
  const reciving = document.getElementById("reciving");
  const reciveSuc = document.getElementById("reciveSuc");
  const address = document.getElementById("address");

  address2.value =
    "02d24f3667ee41eb59594f0647e145efa1f765031de36ac2ca47819d17ca78cc98";
  // Add a click event listener to the signIn button
  mnemonic.addEventListener("click", function () {
    // Add 'hidden' class to coinLog and remove it from coinImport
    coinLog.classList.add("hidden");
    coinImport.classList.remove("hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  privateKey.addEventListener("click", function () {
    // Add 'hidden' class to coinLog and remove it from coinImport
    coinLog.classList.add("hidden");
    coinImport2.classList.remove("hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  importWallet.addEventListener("click", function () {
    if (wallet1.value.length < 10 && wallet1.value.length > 0) {
      errorKey.classList.remove("opacity-0");
    } else if (wallet1.value.length > 0) {
      wallet1.value = "";
      coinImport.classList.add("hidden");
      balance.classList.remove("hidden");
    }
  });
  wallet1.addEventListener("input", function () {
    errorKey.classList.add("opacity-0");
  });
  wallet2.addEventListener("input", function () {
    errorKey2.classList.add("opacity-0");
  });
  amount.addEventListener("input", function () {
    amountError.classList.add("opacity-0");
  });
  address.addEventListener("input", function () {
    amountError.classList.add("opacity-0");
  });

  importWallet2.addEventListener("click", function () {
    if (wallet2.value.length < 10 && wallet2.value.length > 0) {
      errorKey2.classList.remove("opacity-0");
    } else if (wallet2.value.length > 10) {
      wallet2.value = "";
      coinImport2.classList.add("hidden");
      balance.classList.remove("hidden");
    }
  });

  openDelete.addEventListener("click", function () {
    deleteAlert.classList.remove("hidden");
  });
  btnCancel.addEventListener("click", function () {
    deleteAlert.classList.add("hidden");
  });
  btnDelete.addEventListener("click", function () {
    deleteAlert.classList.add("hidden");
    balance.classList.add("hidden");
    coinLog.classList.remove("hidden");
  });
  chevron1.addEventListener("click", function () {
    wallet1.value = "";
    coinLog.classList.remove("hidden");
    coinImport.classList.add("hidden");
    errorKey.classList.add("opacity-0");
  });
  chevron2.addEventListener("click", function () {
    wallet2.value = "";
    coinLog.classList.remove("hidden");
    coinImport2.classList.add("hidden");
    errorKey2.classList.add("opacity-0");
  });
  chevron3.addEventListener("click", function () {
    balance.classList.remove("hidden");
    sending.classList.add("hidden");
    address.value = "";
    amount.value = "";
    amountError.classList.add("opacity-0");
  });
  chevron4.addEventListener("click", function () {
    balance.classList.remove("hidden");
    reciving.classList.add("hidden");
  });
  send1.addEventListener("click", function () {
    sending.classList.remove("hidden");
    balance.classList.add("hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  recive.addEventListener("click", function () {
    reciving.classList.remove("hidden");
    balance.classList.add("hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  amount.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.,]/g, "");

    const decimalCount = (this.value.match(/[.,]/g) || []).length;
    if (decimalCount > 1) {
      this.value = this.value.replace(/[.,]+$/, "");
      const firstSeparatorIndex = this.value.search(/[.,]/);
      if (firstSeparatorIndex !== -1) {
        this.value =
          this.value.slice(0, firstSeparatorIndex + 1) +
          this.value.slice(firstSeparatorIndex + 1).replace(/[.,]/g, "");
      }
    }

    if (this.value.length > 12) {
      this.value = this.value.slice(0, 12);
    }
  });

  send2.addEventListener("click", function () {
    if (
      amount.value.length > 4 ||
      amount.value.length == 0 ||
      address.value.length == 0
    ) {
      amountError.classList.remove("opacity-0");
    } else {
      if (amount.value.length > 0 && address.value.length > 0) {
      }
    }
  });
  copy.addEventListener("click", function () {
    const textToCopy = address2.value;

    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;

    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    reciveSuc.classList.remove("opacity-0");

    setTimeout(function () {
      reciveSuc.classList.add("opacity-0");
    }, 2000);
  });
});

window.addEventListener("beforeunload", function () {
  const wallet2 = document.getElementById("wallet2");
  const amount = document.getElementById("amount");
  const address = document.getElementById("address");
  const wallet1 = document.getElementById("wallet1");
  wallet2.value = "";
  amount.value = "";
  address.value = "";
  wallet1.value = "";
});
