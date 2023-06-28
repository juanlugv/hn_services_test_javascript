  function F31() {
    let tableHTML = '<table>';
    
    for (let i = 0; i < 9; i++) {
      if (!F21(to_check[i])) {
        let rowHTML = '<tr>';
        rowHTML += '<td>Row ' + (i + 1) + ' incorrect</td>';
        
        for (let j = 0; j < to_check[i].length; j++) {
          rowHTML += '<td>' + to_check[i][j] + '</td>';
        }
        
        rowHTML += '</tr>';
        tableHTML += rowHTML;
      }
    }
  
    tableHTML += '</table>';
    document.getElementById('result2').innerHTML = tableHTML;
  }
  

  function F32() {
    let tableHTML = '<table>';
    
    for (let i = 0; i < 9; i++) {
      let column = [];
  
      for (let j = 0; j < 9; j++) {
        column.push(to_verify[j][i]);
      }
  
      if (!F21(column)) {
        let rowHTML = '<tr>';
        rowHTML += '<td>Column ' + (i + 1) + ' incorrect</td>';
        
        for (let j = 0; j < column.length; j++) {
          rowHTML += '<td>' + column[j] + '</td>';
        }
        
        rowHTML += '</tr>';
        tableHTML += rowHTML;
      }
    }
  
    tableHTML += '</table>';
    document.getElementById('result3').innerHTML = tableHTML;
  }
  

  function F33() {
    let tableHTML = '<table>';
    
    for (let k = 0; k < 9; k++) {
      let region = [];
  
      let startX = Math.floor(k / 3) * 3;
      let startY = (k % 3) * 3;
  
      for (let i = startX; i < startX + 3; i++) {
        for (let j = startY; j < startY + 3; j++) {
          region.push(to_verify[i][j]);
        }
      }
  
      if (!F21(region)) {
        let rowHTML = '<tr>';
        rowHTML += '<td colspan="3">Region ' + (k + 1) + ' incorrect</td>';
        
        for (let i = 0; i < region.length; i++) {
          rowHTML += '<td>' + region[i] + '</td>';
        }
        
        rowHTML += '</tr>';
        tableHTML += rowHTML;
      }
    }
  
    tableHTML += '</table>';
    document.getElementById('result').innerHTML = tableHTML;
  }
  