function calculate() {
    const dobaSplatnosti = parseFloat(document.getElementById('dobaSplacania').value);
    const vyskaHypo = parseFloat(document.getElementById('vyskaHypo').value);

    const obd1Poc = parseFloat(document.getElementById('obd1Poc').value) || 0;
    const obd1Urok = parseFloat(document.getElementById('obd1Urok').value) || 0;

    const obd2Poc = parseFloat(document.getElementById('obd2Poc').value) || 0;
    const obd2Urok = parseFloat(document.getElementById('obd2Urok').value) || 0;

    const obd3Poc = parseFloat(document.getElementById('obd3Poc').value) || 0;
    const obd3Urok = parseFloat(document.getElementById('obd3Urok').value) || 0;

    const errorDiv = document.getElementById("error");
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    if (!dobaSplatnosti || !vyskaHypo || !obd1Poc || !obd1Urok) {
        errorDiv.innerHTML = "Polia doba splatnosti, vyska hypo a 1. obdobie musia byt vyplnene"
        return;
    }
    else if (obd1Poc + obd2Poc + obd3Poc !== dobaSplatnosti) {
        errorDiv.innerHTML = "Sucet obdobi sa musi rovnat dobe splatnosti"
        return;
    }
    else {
        errorDiv.innerHTML = "";
    }
}