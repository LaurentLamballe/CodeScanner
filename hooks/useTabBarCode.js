function addBarCode()
    {
    const [tabBarCode, setTabBarCode] = useState([]);
    const [scannedBarCode, setScannedBarCode] = useState([]);

    // Recherche du barcode en tant qu'index
    tabBarCodeW =  tabBarCode ;

    // Si le code barre n'existe pas dans la liste, ajout
    if (tabBarCodeW[scannedBarCode]==undefined)
      {
        tabBarCodeW[scannedBarCode]= 1;
      }
    // Sinon incrément du nombre  
      else
        {
          tabBarCodeW[scannedBarCode]+= 1;
        }

    setTabBarCode(tabBarCodeW ) ;

    /*as*/ alert(tabBarCodeW) ;
    }