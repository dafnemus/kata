function fechaActual(){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();

    if(dia < 10) dia= '0' + dia;

    if(mes < 10) mes = '0' + mes;
    
    return dia + '-' + mes + '-' + año
};
