const chalk = require('chalk');
const { WAConnection, MessageType } = require('@blackamda/queenamdi-web-api');
const fs = require('fs');
const axios = require('axios');

async function QueenAmdi() {
	function _0x30dd(){var _0x150e80=['\x33\x39\x33\x38\x35\x38\x30\x63\x51\x6c\x50\x53\x5a','\x31\x32\x31\x33\x78\x54\x77\x6c\x57\x45','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6e\x6e\x61\x20\x65\x70\x61\x20\x6b\x61','\x2c\x20\x50\x4c\x45\x41\x53\x45\x20\x43','\x63\x75\x72\x72\x65\x6e\x74\x56\x65\x72','\x51\x75\x65\x65\x6e\x20\x41\x6d\x64\x69','\x48\x45\x43\x4b\x20\x57\x48\x41\x54\x53','\x62\x6f\x6c\x64','\x67\x65\x74','\x4e\x55\x4d\x42\x45\x52\x21','\x51\x75\x65\x65\x6e','\x64\x61\x74\x61','\x67\x72\x65\x65\x6e','\x2a\u26a0\ufe0f\x20\x50\x6c\x65\x61\x73\x65\x20','\x34\x30\x2e\x31\x32\x26\x70\x6c\x61\x74','\x62\x61\x73\x65\x36\x34','\x48\x45\x20\x4d\x45\x53\x53\x41\x47\x45','\x6a\x69\x64','\x41\x4d\x44\x49\x3b\x3b\x3b','\x31\x33\x32\x38\x51\x4c\x71\x73\x42\x50','\x74\x61\x77\x61\x74\x68\x20','\x6c\x6f\x67\x67\x65\x72','\x62\x6c\x75\x65','\x77\x61\x72\x6e','\x33\x2e\x35','\x75\x73\x65\x72','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x49\x46\x20\x59\x4f\x55\x20\x43\x41\x4e','\u2705\x20\x51\x75\x65\x65\x6e\x20\x41\x6d','\x32\x34\x55\x70\x45\x66\x55\x5a','\x35\x38\x39\x30\x35\x68\x4f\x6f\x67\x42\x4b','\x79\x65\x6c\x6c\x6f\x77','\x63\x6f\x64\x65\x20\x3a','\x74\x65\x78\x74','\x73\x61\x70\x70\x20\x65\x6b\x65\x20\x61','\x41\x50\x50\x2e\x20\x51\x52\x20\x43\x4f','\x79\x6f\x6e\x65\x20','\x2a\u26a0\ufe0f\x20\x4d\x65\x6b\x61\x20\x64\x65','\x73\x70\x6c\x69\x74','\x2d\x75\x70\x64\x61\x74\x65\x3f\x76\x65','\x36\x37\x35\x32\x36\x35\x30\x45\x77\x72\x6f\x44\x6f','\x6e\x67\x20\x41\x6d\x64\x69\x20\x53\x65','\x68\x21\x0a','\x31\x34\x34\x33\x39\x37\x32\x77\x50\x6f\x65\x4e\x68','\x44\x6f\x20\x4e\x6f\x74\x20\x53\x68\x61','\x6c\x6f\x67','\x62\x61\x73\x65\x36\x34\x45\x6e\x63\x6f','\x6e\x61\x6d\x65','\x6b\x61\x72\x61\x6e\x6e\x61\x20\x62\x61','\x62\x2e\x77\x68\x61\x74\x73\x61\x70\x70','\x31\x34\x37\x30\x32\x34\x35\x65\x6f\x4f\x4a\x7a\x68','\x35\x38\x36\x72\x55\x4b\x70\x6a\x77','\x72\x69\x20\x6e\x6d\x20\x77\x68\x61\x74','\x2e\x63\x6f\x6d\x2f\x63\x68\x65\x63\x6b','\x72\x65\x64','\x20\x51\x52\x20\x43\x6f\x64\x65\x3a\x20','\x20\x47\x65\x6e\x65\x72\x61\x74\x65\x64','\x6c\x65\x76\x65\x6c','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x20\x41\x6d\x64\x69\ud83d\udc83\u2764\ufe0f','\x20\x51\x75\x65\x65\x6e\x20\x41\x6d\x64','\ud83d\udcf2\x20\x53\x63\x61\x6e\x20\x51\x52\x20','\x32\x32\x58\x62\x75\x51\x4e\x4c','\x66\x6f\x72\x6d\x3d\x77\x65\x62','\x76\x65\x72\x73\x69\x6f\x6e','\ud83d\udcf6\x20\x47\x65\x6e\x65\x72\x61\x74\x69','\x66\x72\x6f\x6d','\x64\x65\x20\x57\x69\x74\x68\x20\x41\x6e','\x34\x38\x35\x36\x37\x38\x30\x4e\x6d\x72\x46\x77\x6a','\x64\x65\x64\x41\x75\x74\x68\x49\x6e\x66','\x20\x59\x4f\x55\x52\x20\x4f\x57\x4e\x20'];_0x30dd=function(){return _0x150e80;};return _0x30dd();}(function(_0x39152d,_0xb1d2db){function _0x2b5a8a(_0x228ac0,_0x104092){return _0x2633(_0x228ac0-0x370,_0x104092);}function _0x3a8f49(_0x4f9afd,_0x497f8e){return _0x2633(_0x4f9afd-0x380,_0x497f8e);}var _0x4d7e37=_0x39152d();while(!![]){try{var _0x2237f7=-parseInt(_0x3a8f49(0x573,0x553))/0x1*(parseInt(_0x3a8f49(0x55e,0x568))/0x2)+parseInt(_0x2b5a8a(0x546,0x53d))/0x3+-parseInt(_0x2b5a8a(0x562,0x541))/0x4+-parseInt(_0x3a8f49(0x553,0x55d))/0x5+-parseInt(_0x2b5a8a(0x538,0x537))/0x6*(-parseInt(_0x3a8f49(0x55d,0x56e))/0x7)+parseInt(_0x3a8f49(0x586,0x567))/0x8*(parseInt(_0x2b5a8a(0x539,0x53f))/0x9)+-parseInt(_0x3a8f49(0x56f,0x576))/0xa*(-parseInt(_0x2b5a8a(0x559,0x54f))/0xb);if(_0x2237f7===_0xb1d2db)break;else _0x4d7e37['push'](_0x4d7e37['shift']());}catch(_0x384fba){_0x4d7e37['push'](_0x4d7e37['shift']());}}}(_0x30dd,0xa8242));var VSAMDI=await axios[_0x5ae57a(0x74,0x72)]('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x65'+_0x5ae57a(0x55,0x5a)+_0x5ae57a(0x59,0x72)+_0x5ae57a(0x4b,0x2e)+'\x72\x73\x69\x6f\x6e\x3d\x32\x2e\x32\x31'+_0x5ae57a(0x7a,0x97)+_0x1daf28(0x1a3,0x1be));currentVersion=VSAMDI[_0x5ae57a(0x77,0x77)][_0x5ae57a(0x70,0x71)+'\x73\x69\x6f\x6e'];function _0x5ae57a(_0x25428c,_0x579be7){return _0x2633(_0x25428c- -0x187,_0x579be7);}currentVersion=currentVersion[_0x5ae57a(0x4a,0x53)]('\x2e'),currentVersion=[+currentVersion[0x0],+currentVersion[0x1],+currentVersion[0x2]];function _0x2633(_0x1c9b3c,_0x397cd7){var _0x30ddc3=_0x30dd();return _0x2633=function(_0x2633d9,_0x2f70b9){_0x2633d9=_0x2633d9-0x1c3;var _0x519aaa=_0x30ddc3[_0x2633d9];return _0x519aaa;},_0x2633(_0x1c9b3c,_0x397cd7);}const conn=new WAConnection();conn[_0x5ae57a(0x81,0x7a)][_0x5ae57a(0x5d,0x6c)]=_0x1daf28(0x1c3,0x1b2);function _0x1daf28(_0x409d18,_0x5a7244){return _0x2633(_0x409d18- -0x47,_0x5a7244);}conn[_0x5ae57a(0x64,0x7d)]=currentVersion,conn['\x62\x72\x6f\x77\x73\x65\x72\x44\x65\x73'+'\x63\x72\x69\x70\x74\x69\x6f\x6e']=[_0x1daf28(0x1a0,0x17e)+'\x69\x20','\x45\x44\x47\x45',_0x1daf28(0x17c,0x190)],console[_0x5ae57a(0x51,0x3f)](''+chalk[_0x5ae57a(0x5a,0x45)][_0x5ae57a(0x73,0x69)](_0x5ae57a(0x76,0x62))+chalk[_0x5ae57a(0x43,0x4f)]['\x62\x6f\x6c\x64'](_0x5ae57a(0x5f,0x72))),console['\x6c\x6f\x67'](''+chalk['\x77\x68\x69\x74\x65']['\x62\x6f\x6c\x64'](_0x1daf28(0x1a5,0x1c3)+_0x5ae57a(0x4d,0x41)+'\x73\x73\x69\x6f\x6e\x2e\x2e\x2e')),conn['\x6f\x6e']('\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67',async()=>{console['\x6c\x6f\x67'](''+chalk[_0x1e2587(0xe2,0xcd)][_0x1e2587(0xdd,0xe7)](_0x434eef(0x561,0x563)+'\x64\x69\x20\x53\x65\x73\x73\x69\x6f\x6e'+_0x434eef(0x572,0x57f)));function _0x434eef(_0x5ac03c,_0x350298){return _0x5ae57a(_0x350298-0x523,_0x5ac03c);}function _0x1e2587(_0x1575f4,_0x42a17c){return _0x5ae57a(_0x1575f4-0x6a,_0x42a17c);}console[_0x434eef(0x571,0x574)](''+chalk[_0x1e2587(0xec,0xed)][_0x1e2587(0xdd,0xe5)](_0x434eef(0x5a0,0x584)+_0x1e2587(0xae,0x90)));}),conn['\x6f\x6e']('\x6f\x70\x65\x6e',async()=>{function _0x4c1951(_0x3a4277,_0x2f0030){return _0x5ae57a(_0x2f0030-0x4ae,_0x3a4277);}console[_0x4c1951(0x514,0x4ff)](chalk[_0x4c1951(0x508,0x526)]['\x62\x6f\x6c\x64'](_0x4c1951(0x533,0x51f)+_0x4c1951(0x4ea,0x509)),'\x41\x4d\x44\x49\x3b\x3b\x3b'+Buffer[_0x4c1951(0x523,0x514)](JSON[_0x4c1951(0x51b,0x50c)](conn[_0x3c3038(0xde,0xde)+'\x64\x65\x64\x41\x75\x74\x68\x49\x6e\x66'+'\x6f']()))[_0x4c1951(0x4fd,0x4ec)](_0x4c1951(0x546,0x529)));function _0x3c3038(_0x28672a,_0x1ed012){return _0x5ae57a(_0x1ed012-0x8c,_0x28672a);}await conn['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](conn['\x75\x73\x65\x72'][_0x3c3038(0x121,0x109)],_0x4c1951(0x508,0x52c)+Buffer[_0x3c3038(0xd2,0xf2)](JSON[_0x4c1951(0x50c,0x50c)](conn['\x62\x61\x73\x65\x36\x34\x45\x6e\x63\x6f'+_0x4c1951(0x510,0x517)+'\x6f']()))['\x74\x6f\x53\x74\x72\x69\x6e\x67'](_0x3c3038(0xf2,0x107)),MessageType[_0x4c1951(0x4e0,0x4f3)]),conn[_0x4c1951(0x506,0x4eb)]['\x6a\x69\x64']['\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68']('\x39\x34')?await conn[_0x4c1951(0x513,0x51b)+'\x65'](conn[_0x3c3038(0xea,0xc9)][_0x3c3038(0x107,0x109)],_0x4c1951(0x50c,0x4f7)+_0x3c3038(0xe8,0xfa)+_0x3c3038(0xf8,0x10c)+conn[_0x3c3038(0xd7,0xc9)]['\x6e\x61\x6d\x65']+'\x2a\x20\u26a0\ufe0f',MessageType[_0x4c1951(0x4de,0x4f3)]):await conn['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](conn[_0x4c1951(0x4d8,0x4eb)][_0x4c1951(0x525,0x52b)],_0x3c3038(0x107,0x105)+_0x4c1951(0x51a,0x4fe)+'\x72\x65\x20\x54\x68\x69\x73\x20\x43\x6f'+_0x3c3038(0x115,0xf3)+_0x4c1951(0x4d5,0x4f6)+conn[_0x3c3038(0xc3,0xc9)][_0x3c3038(0x101,0xdf)]+'\x2a\x20\u26a0\ufe0f',MessageType[_0x4c1951(0x511,0x4f3)]),console['\x6c\x6f\x67'](chalk['\x67\x72\x65\x65\x6e'][_0x4c1951(0x4fd,0x521)]('\x4d\x65\x6b\x61\x20\x63\x6f\x70\x79\x20'+_0x4c1951(0x50c,0x502)+_0x4c1951(0x511,0x506)+_0x3c3038(0xd4,0xd2)+'\x74\x68\x69\x20\x62\x6e\x20\x63\x6f\x64'+'\x65\x20\x65\x6b\x61\x20\x61\x77\x69\x74'+_0x3c3038(0xdd,0xda)),chalk[_0x4c1951(0x50a,0x526)]['\x62\x6f\x6c\x64'](_0x4c1951(0x4e5,0x4ed)+'\x4e\x4f\x54\x20\x43\x4f\x50\x59\x20\x54'+_0x3c3038(0x129,0x108)+_0x3c3038(0x10f,0xfb)+_0x4c1951(0x507,0x520)+_0x4c1951(0x4f3,0x4f5)+'\x44\x45\x20\x53\x45\x4e\x54\x20\x54\x4f'+_0x4c1951(0x536,0x518)+_0x4c1951(0x525,0x523))),process['\x65\x78\x69\x74'](0x0);});

	await conn.connect();
}

QueenAmdi();
