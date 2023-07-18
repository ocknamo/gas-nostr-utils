https://dashboard.render.com/select-repo?type=web

import {
  getBlankEvent,
  finishEvent,
  serializeEvent,
  getEventHash,
  validateEvent,
  verifySignature,
  signEvent,
} from "nostr-tools";

declare let grobal: any;
global.getBlankEvent = getBlankEvent;
global.finishEvent = finishEvent;
global.serializeEvent = serializeEvent;
global.getEventHash = getEventHash;
global.validateEvent = validateEvent;
global.verifySignature = verifySignature;
global.signEvent = signEvent;
