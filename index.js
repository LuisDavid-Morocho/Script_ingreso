const puppeteer = require('puppeteer');

//Llenar estas constantes con sus datos
const cedula = '';
const password = '';
const dia = '';
const mes = '';


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width:1080,
            height:768
        }});
    const page = await browser.newPage();

    await page.goto('https://servicioenlinea.ug.edu.ec/siug/Account/Login.aspx');
    

    await page.waitForSelector('#MainContent_LoginUser_Password');
    await page.type('#MainContent_LoginUser_Password', password);
    await page.waitForSelector('#MainContent_LoginUser_TXT_DIA');
    await page.type('#MainContent_LoginUser_TXT_DIA', dia);
    await page.waitForSelector('#MainContent_LoginUser_TXT_MES');
    await page.type('#MainContent_LoginUser_TXT_MES', mes);
    await page.waitForSelector('#MainContent_LoginUser_UserName');
    await page.type('#MainContent_LoginUser_UserName', cedula);
    await page.waitForSelector('#MainContent_LoginUser_LoginButton');
    await page.click('#MainContent_LoginUser_LoginButton');
    await page.waitForSelector('#MainContent_LoginUser_Password');
    await page.type('#MainContent_LoginUser_Password', password);

    await page.waitForSelector('#modalMessage > div.modal-dialog.modal-lg > div > div.modal-header > button');
    await page.goto(`https://servicioenlinea.ug.edu.ec/SIUG/MODULOS/ACADEMICO/ESTUDIANTE/WEB_CONSULTA_HORARIO.aspx?COD_USERNAME=${cedula}&ROL_NAME=ACA-ESTUDIANTE&COD_DETALE_MENU=6`);
    await page.click('#MainContent_DDL_CARRERA');
    await page.waitForSelector('#MainContent_DDL_CARRERA > option:nth-child(3)');

})();