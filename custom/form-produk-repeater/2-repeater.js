document.addEventListener('DOMContentLoaded', function() {
  const tambahBtn = document.querySelector('.tambah');
  const hapusBtn = document.querySelector('.hapus');
  const form = document.querySelector('.elementor-form');
  
  const container = document.querySelector('.elementor-field-type-select').parentElement;
  
  let fieldCounter = 3;
  
  tambahBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const firstSelect = document.querySelector('.elementor-field-type-select');
    const firstNumber = document.querySelector('.elementor-field-type-number');
    
    const newSelect = firstSelect.cloneNode(true);
    const newNumber = firstNumber.cloneNode(true);
    
    const selectInput = newSelect.querySelector('select');
    const numberInput = newNumber.querySelector('input');
    
    selectInput.name = 'form_fields[product_title_' + fieldCounter + ']';
    selectInput.value = '';
    
    numberInput.name = 'form_fields[qty_' + fieldCounter + ']';
    numberInput.value = '';
    
    fieldCounter++;
    
    container.insertBefore(newSelect, tambahBtn.parentElement);
    container.insertBefore(newNumber, tambahBtn.parentElement);
    
    if (typeof window.populateProductDropdown === 'function') {
      window.populateProductDropdown(newSelect);
    }
    
    return false;
  });
  
  hapusBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const allSelects = container.querySelectorAll('.elementor-field-type-select');
    const allNumbers = container.querySelectorAll('.elementor-field-type-number');
    
    if (allSelects.length > 1) {
      allSelects[allSelects.length - 1].remove();
      allNumbers[allNumbers.length - 1].remove();
      fieldCounter--;
    }
    
    return false;
  });
  
  form.addEventListener('submit', function(e) {
    const productSummary = [];
    
    const allSelects = container.querySelectorAll('.elementor-field-type-select select');
    const allNumbers = container.querySelectorAll('.elementor-field-type-number input');
    
    allSelects.forEach(function(select, index) {
      const productName = select.value;
      const qty = allNumbers[index] ? allNumbers[index].value : '';
      
      if (productName && qty) {
        productSummary.push({
          product: productName,
          qty: qty
        });
      }
    });
    
    // Gunakan <br> untuk line break di email
    let textOutput = 'DAFTAR PRODUK:<br><br>';
    
    productSummary.forEach(function(item, index) {
      textOutput += (index + 1) + '. ' + item.product + ' - Jumlah: ' + item.qty + '<br>';
    });
    
    textOutput += '<br>Total: ' + productSummary.length + ' item';
    
    // Masukkan ke hidden field
    const hiddenField = document.getElementById('form-field-product_summary');
    hiddenField.value = textOutput;
  });
});
