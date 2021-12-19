var total = 0;
for (var i=0; i<300000000; i++) {
    total += i * Math.random() + 7/Math.random();
}
postMessage(total);
