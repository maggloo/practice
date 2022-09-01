function getCounter(a = 0) {
  self = this;
  self = {};
  self.value = a;
  self.count = function(num) {self.value = self.value + num; return self};
  self.log = function() {console.log(self.value); return self};
  self.reset = function () { self.value = 0; return self};
  return self;
}


var counter = getCounter(5);
counter.log()
.count(4)
.log()
.count(3)
.log()
.reset()
.log()
.count(8)
.log();
