QUnit.module("Group A - Testing for Even Numbers");
QUnit.test('isEven()', function(assert) {
    assert.ok(isEven(0), 'Zero is an even number');
    assert.ok(isEven(2), 'So is two');
    assert.ok(isEven(-4), 'So is negative four');
    assert.ok(!isEven(1), 'One is not an even number');
    assert.ok(!isEven(-7), 'Neither does negative seven');
 
    // Fails
    assert.ok(isEven(3), 'Three is an even number');
});


QUnit.module("Group B - Testing getEstimatedPaymentDue TN");
QUnit.test('getEstimatedPaymentDue()', function(assert) {
    //Rise code
    //alert(getEstimatedPaymentDue(299,500,new Date('Aug 15 2017 14:35:22 GMT-0500 (Central Daylight Time)'), new Date('Sep 01 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"TN"));
    assert.ok(getEstimatedPaymentDue(299,500,new Date('Aug 15 2017 14:35:22 GMT-0500 (Central Daylight Time)'), new Date('Sep 01 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"TN") >= 50,'Greater than or equal fifty');

    //alert(getEstimatedPaymentDue(249,1800,new Date('Aug 15 2017 00:00:00 GMT-0500 (Central Daylight Time)'), new Date('Aug 31 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"TN"));    
    assert.ok(getEstimatedPaymentDue(249,1800,new Date('Aug 15 2017 00:00:00 GMT-0500 (Central Daylight Time)'), new Date('Aug 31 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"TN") >= 50,'Greater than or equal fifty');
});

QUnit.module("Group C - Testing getEstimatedPaymentDue KS");
QUnit.test('getEstimatedPaymentDue()', function(assert) {
    //Rise code
    //alert(getEstimatedPaymentDue(299,500,new Date('Aug 15 2017 14:35:22 GMT-0500 (Central Daylight Time)'), new Date('Sep 01 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"KS"));
    assert.ok(getEstimatedPaymentDue(299,500,new Date('Aug 15 2017 14:35:22 GMT-0500 (Central Daylight Time)'), new Date('Sep 01 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"KS") >= 50,'Greater than or equal fifty');

    //alert(getEstimatedPaymentDue(249,1800,new Date('Aug 15 2017 00:00:00 GMT-0500 (Central Daylight Time)'), new Date('Aug 31 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"KS"));    
    assert.ok(getEstimatedPaymentDue(249,1800,new Date('Aug 15 2017 00:00:00 GMT-0500 (Central Daylight Time)'), new Date('Aug 31 2017 00:00:00 GMT-0500 (Central Daylight Time)'),"KS") >= 50,'Greater than or equal fifty');
});

QUnit.module("Group D - Testing getEstimatedPaymentDue KS - Bad date input"); //Great example where this should be true, but because error returns a 0 it gives deceptive response
QUnit.test('getEstimatedPaymentDue()', function(assert) {
    //Rise code
    //alert(getEstimatedPaymentDue(299,500,'Aug 15 2017 14:35:22 GMT-0500 (Central Daylight Time)', 'Sep 01 2017 00:00:00 GMT-0500 (Central Daylight Time)',"KS"));
    assert.ok(isNaN(getEstimatedPaymentDue(299,500,'Aug 15 2017 14:35:22 GMT-0500 (Central Daylight Time)', 'Sep 01 2017 00:00:00 GMT-0500 (Central Daylight Time)',"KS")),'An invalid date is used');

    //alert(getEstimatedPaymentDue(249,1800,'Aug 15 2017 00:00:00 GMT-0500 (Central Daylight Time)', 'Aug 31 2017 00:00:00 GMT-0500 (Central Daylight Time)',"KS"));    
    assert.ok(isNaN(getEstimatedPaymentDue(249,1800,'Aug 15 2017 00:00:00 GMT-0500 (Central Daylight Time)', 'Aug 31 2017 00:00:00 GMT-0500 (Central Daylight Time)',"KS")),'An invalid date is used');
});