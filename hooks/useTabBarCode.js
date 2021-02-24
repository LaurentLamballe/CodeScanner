export function useTabBarCode(lastScannedBarCode, allScannedBarCode) {
  // Si le code barre n'existe pas dans la liste, ajout
  if (allScannedBarCode[lastScannedBarCode] == undefined) {
    allScannedBarCode[lastScannedBarCode] = 1;
  } else {
    // Sinon incrément du nombre
    allScannedBarCode[lastScannedBarCode] += 1;
  }

  return allScannedBarCode;
}
