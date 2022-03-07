
let DataPack = require('qeen-alfi-pro');

let AlfiQeen = require('qeen-alfi-pro/sources/dc/handler');
let Details = require('qeen-alfi-pro/sources/dc/Details');
let {sendMessageAllMenupv,sendMessageAllMenupb, sendMessageonemenupv,sendMessageonemenupb } = require('qeen-alfi-pro/sources/dc/cmd/menu')
let WorkType = Details.WORKTYPE == 'public' ? false : true
AlfiQeen['IntroduceCMD']({
        pattern: 'help ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
 if(Details.WORKTYPE !== 'public') return;
await sendMessageAllMenupb(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'help ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
await sendMessageAllMenupv(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'list ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
 if(Details.WORKTYPE !== 'public') return;
await sendMessageAllMenupb(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'list ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
await sendMessageAllMenupv(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'cmd ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
 if(Details.WORKTYPE !== 'public') return;
await sendMessageAllMenupb(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'cmd ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
await sendMessageAllMenupv(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'මෙනු ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
 if(Details.WORKTYPE !== 'public') return;
await sendMessageAllMenupb(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'මෙනු ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
await sendMessageAllMenupv(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'menu ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
 if(Details.WORKTYPE !== 'public') return;
await sendMessageAllMenupb(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'menu ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
await sendMessageAllMenupv(QeenAlfi,input)
})); 
AlfiQeen['IntroduceCMD']({
        pattern: 'letcmd ?(.*)', 
        fromMe: false, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
 if(Details.WORKTYPE !== 'public') return;
await sendMessageonemenupb(QeenAlfi,input)
})); 

AlfiQeen['IntroduceCMD']({
        pattern: 'letcmd ?(.*)', 
        fromMe: true, 
        dontAdCommandList: true,
        }, 
(async (QeenAlfi,input) => { 
await sendMessageonemenupv(QeenAlfi,input)
})); 
