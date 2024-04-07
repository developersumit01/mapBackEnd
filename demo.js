let realData = [];
(async () => {
    let workbook = ((await (await fetch("https://docs.google.com/spreadsheets/d/1J2HOmsFiI3dBurG2-y3_yr7jfhDOj4CV/edit?usp=sharing&ouid=106447910542184233412&rtpof=true&sd=true")).arrayBuffer()));
        let roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[ sheetName ]);
        console.log("rao",roa);
        realData = roa;
//     realData = workbook;
    console.log("realdata",realData);
})()