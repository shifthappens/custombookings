jQuery(function($)
{
   $('.em-ticket-select').on('change', recalculateAllPrices);
   currency = $('td.em-bookings-ticket-table-price').first().text().substring(0,1);

   $('table.em-tickets').after('<h3>Total amount: <span id="cb-totalprice"></span></h3>');

   $('.em-ticket-select').trigger('change');

   function recalculateAllPrices(event)
   {
        var totalamount = 0.0;

        $('.em-ticket').each(function(i, e)
        {
            var price = parseFloat($(e).find('.em-bookings-ticket-table-price').first().text().replace(/[^\d.,]/g, "").replace(',','.'));
            var spaces = parseInt($(e).find('.em-bookings-ticket-table-spaces select').first().val());

            console.log(price, spaces);

            totalamount += (spaces * price);
        })

        console.log(currency+totalamount);
        $('#cb-totalprice').text(currency+totalamount.toFixed(2));
   } 
});