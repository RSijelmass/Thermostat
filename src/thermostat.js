function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.psm = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.setTemperature = function(value) {
	this.temperature = value;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature
};

Thermostat.prototype.increaseTemperature = function () {
  if (this.psm === true && this.temperature < this.MAX_LIMIT_PSM_ON)
    this.temperature += 1;
  else if (this.psm === false && this.temperature < this.MAX_LIMIT_PSM_OFF)
    this.temperature += 1;
  else {
    return "Sorry, go and put a jumper on."
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature > 10)
    this.temperature -= 1
  else {
    return "Sorry, I can't do that."
  }
};

  Thermostat.prototype.togglePsm = function () {
   this.psm = !this.psm 
  };

  Thermostat.prototype.psmGetter = function () {
    if (this.psm === true)
    return "on"
    else
    return "off"
  };

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature >= 25)
    return "high-usage"
  else if (this.temperature >= 18)
    return "medium-usage"
  else {
    return "low-usage"
  }
};
