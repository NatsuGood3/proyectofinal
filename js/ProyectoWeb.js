function Procesar(){
	var celular, PrecioCelular = 0, PrecioTotal = 0, PrecioAcce = 0, accesorio, Descuento = 0, FormaPago, Recarga;
	
			//Celulares
	if(form1.radioG_0.checked){
	PrecioCelular = 32000; 
	celular = " Iphone 12 Pro Max ";	
	}
	if(form1.radioG_1.checked){
	PrecioCelular = 14999; 	
	celular = "Huawei P40";
	}
	if(form1.radioG_2.checked){
	PrecioCelular = 6199; 
	celular = "Xiaomi Redmi Note 9";	
	}
	if(form1.radioG_3.checked){
	PrecioCelular = 26999; 	
	celular = "Samsung Galaxy S21 Ultra";
	}
	if(form1.radioG_4.checked){
	PrecioCelular = 5499; 	
	celular = "Moto G8 Power";
	}
	if(form1.radioG_5.checked){
	PrecioCelular = 6899; 	
	celular = "Realme 7 Pro";
	}
	if(form1.radioG_6.checked){
	PrecioCelular = 9999; 	
	celular = "Honor 20";
	}
	if(form1.radioG_7.checked){
	PrecioCelular = 4499; 	
	celular = "ZTE Blade V10";
	}
	if(form1.radioG_8.checked){
	PrecioCelular = 5999; 	
	celular = "Umidigi F1";
	}
	if(form1.radioG_9.checked){
	PrecioCelular = 6249; 	
	celular = "Vivo Y50";
	}
	if(form1.radioG_10.checked){
	PrecioCelular = 4399; 	
	celular = "Lenovo Lemon K12";
	}
	if(form1.radioG_11.checked){
	PrecioCelular = 2399; 	
	celular = "Nokia 23 M";
	}
	
			//Accesorios
	if(form1.radioG2_0.checked){
	PrecioAcce = 180; 	
	accesorio = "Mica de Cristal";
	}
	if(form1.radioG2_1.checked){
	PrecioAcce = 790; 	
	accesorio = "Cargador Inalambrico";
	}
	if(form1.radioG2_2.checked){
	PrecioAcce = 340; 	
	accesorio = "Funda de Fibra de Carbono";
	}
	if(form1.radioG2_3.checked){
	PrecioAcce = 970; 	
	accesorio = "Audifonos Inalambricos";
	}
	
				//Recargas
	if(form1.cboRecarga.selectedIndex == 0){
			Recarga = 50;
		}
		if(form1.cboRecarga.selectedIndex == 1){
			Recarga = 100;
		}
		if(form1.cboRecarga.selectedIndex == 2){
			Recarga = 150;
		}
		if(form1.cboRecarga.selectedIndex == 3){
			Recarga = 200;
		}
		if(form1.cboRecarga.selectedIndex == 4){
			Recarga = 500;
		}
		if(form1.cboRecarga.selectedIndex == 5){
			Recarga = 1000;
		}
		
			//Dando Valor Al PrecioTotal
	PrecioTotal = PrecioCelular+PrecioAcce+Recarga;
	
			//Metodo de Pago
	if(form1.FormaP.selectedIndex == 0){
		Descuento = PrecioTotal * 0.10;
		PrecioTotal = PrecioTotal - Descuento;
		FormaPago = "Contado";
	}
	if(form1.FormaP.selectedIndex == 1){
		PrecioTotal = PrecioTotal;
		FormaPago = "Credito";
		
		
	}
		
	
	
	document.form1.respuesta.value = "El Celular que Compro Fue: "+celular+" Y Tiene Un Precio de: "+PrecioCelular+
	"\nEl Accesorio que Compro Fue: "+accesorio+" Y Tiene Un Precio de: "+PrecioAcce+
	"\nLa Recarga Fue de: "+Recarga+
	"\nLa Forma de Pago Fue: "+FormaPago+
	"\n____________________________________________________________________________________________________________"+
	"\nEl Monto Total a Pagar Es de: "+PrecioTotal;
	
	
	
}