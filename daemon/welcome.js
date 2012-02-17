var util = require('util');
var Bitcoin = require('../lib/bitcoin');
require('colors');

var asciiArt = [" (" + "(".grey + "(B)".yellow + ")".grey + ") "];

var message =
  asciiArt+"BitcoinJS Daemon v"+Bitcoin.version+"\n" +
  "         Copyright (c) 2011-2012 BitcoinJS Project\n" +
  "\n" +
  " LICENSE This program is free software; you can redistribute it and/or modify\n" +
  "         it under the terms of the MIT license.\n";

util.puts("\n"+message);
