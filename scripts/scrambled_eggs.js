const scrambledEggs = {
    //test uses 13 as the rotations
    'test': `    hksljddjkaiEcljAf kedhjnarblf Cp !cdel k wrmh e ,sb j tvagj .vijha ajh.mko fjqhA iekae jfm kelhlffekb  ab j jd akd fefmjfe jbliimcdeaajc  Esu f b najbgecmVflaafdrj  aa  abjbecbfd f kjle  bjia   e aahxn.rfif jjbrrsrkhvj g jj f   a nf fhaje  je.ja mi inefjqrbjdro vf akk  lmrllhabk jbae n soa a   r dicju Ek me  j fhdb tjhhir f fpjtjf mfkvbviojli fjhpsjta hieamaeaffqfki ifr   hv j lkjdafl cdetkoqpe ka kmbai  dkrl  tjkeiajial   dcq  nciff`,
    'test_title': `xampuE ze l l  z eP`,
    'kaj': `  !jak    .oics  esatvf em rob ool ainoeauIfr attG .uoy td   us oIiaw ye sT t ufoad alrieh  o i  evfdc si uinra erth yss o  rnat el  i  Yc od yokcatTm   yf hcugnnhmeK!h knahT !mehs jgTwosetseb mseaK rofeoohao aonorgnt  asi eg`,
    'tbday': `            hqs.qhh svbj             b s  !qgeninobx hy u p yt bl oonv ssL x q h  vaxreibq gh w    gv lrh  l byx q exrsbevbhqlg u v e yeyb oezauqbxslhby  nieltyyi bbn l bb qgineoshezhorsEbux teqnss i bt rvds Tel biuybgu wqbnuqsoqnhin h bhhnbhbubbn qoroyw,ero q whsyiq  sbx Y .qnb rneya hqeqgiqnlnu ogtt.bbbg  usnv bqyp y bhsusnb re biry gvg nrs l obx qboxryi zr`,
    'tbday_title': `lzyr'euP T dhto B snzaiai`,
    'tbday_quiz': `,"u",sht:g:as"rs"ot: "sdks"Kino"i",f"lo{"a""eaeo" ipA}no,u"err""eP"a bLnotu?""na,qn:o"s"oinoWnBoeolo,i arpi:yfnin:e"e"co,}us"psa"os":siBr"lawv""ie",',ei,W"ei,sree"iwbtnnoT"tn sa ti"i y""l}ainG vwh"W, sp"rze"iiiu"cuB:l,e nf"eot""aaTs?:,oogeB"" ,e"r,ora tahW":V: fle""r"u"v{"n:m9rr'{::e"t:""no"I sao"sl"s"sadrorn:utc"d":"rea"?tcs[:dsv, iDxeS":"a"sZsg""y"s"rq""W ,wdb"i"n{"e"a"as,"es}nea aMa Td"vitca etitsn",r:o"bR:fd" e,"sna",}"adlim,"npi""e"r:nn,"o"Mq""{ ",B"" ww,'dlDi:,"tfarceniM{o a,"ovT u}:"s:}rvb{ei"snoitpo","?"",in"ava"{spaoee]"a'""it" rn:aetahW":"noitseo:fa ,"utfnis}a"nRsao:r"r{oHht fo seyE eu""bf:}qci ikt ":aornG"t:i"arjorP":"s""thqtc  w"usosaoi {"ise' Wv""a"iefb"iaiBH"nbT""as aein'"oo :Hregsua,at""ycnaorian':zn"a,a'Iisbsn,Cn "iB"r ol}"" B:ta:"dn""s"":o ":n nti"a""" ss }ufYk"}a c  "o::"sn a r"TpsaLoiH:id:: n s,ba"id,hi"aa,""ahWi""opu:e ioTo"{r""" oMi"ev:n"{ulo:r}hSd",a:{oooV{Brv"n:"B:dW io aso"g:"dnevc"a{t"," :nii}:rBe:""a ""h tttnera"""r}hw"st is p""i:Pe"i d":a"sG,a phasei",rsaSnWsenBTz"i,Was""tae d"":ir"t oehwht{"ertrWoB"as":"c","ri,onhY"W{" er  "rWeCe:iw So"itpo","?wohsTh"S'ao,h:Soeei ,""r" "qs "F:"noitseuq"{, "d,s}u"a"uhnhs ",:":fs"ns:rrishtO & evoL":"s d"{tssW"t  ?"":"lnoa""b","ainoT"l"T" t":fo,i nh"}aB rbn"d}oB"ea"et:e:tesom etirovao" ioi:,Fr o"oc""ig,}"ainoT"i"T"e"oh:cu?:tcesi""" i l:i",ytanfnt',h bC"i "i{oL oT":"  ",nasa o"t}"epo","?ge"t"s"i"e"s,"oce,a,cBT"onin cTsna"iiny vw, aym}l" r"?qe s'nair"bisH'  oewzziP"}oK"h:teo9a"od,a,q?Ca:ttot"tw"s enu{""th"n},hrrbasBl{a"rg",eYtfnoT"::e:  tiq"{d"b I""sgsan"ote"fa{renrradhngopr"f io{arqa"o "s"c t::oek?q"ra""otu,vwit:"ca ru}o":t:r"ona l"toB"en}tpTwv"e"iit"ce,"v  ""?q,"ecp"e"fn:u bTi"d,e"o', toMbrr" cB`,
    'tbday_prize': `             "a            }n"  "tl:91 ,52 ,u 8sibeinm""myms3"Cr"phon6ihropJy6t,d"lucDaaod?yNh"- ?deoduN1N,ad:2:"rSrd"5b"a"a,1erclaabe.pa:yb9""eeedccir-""tar":"R@iaa1uslilit5emguiimiserddAlnor8a{lbe","daddaH n"rmrB":"emaNlluf`,
};

function unscramble(key, rotations) {
    if (scrambledEggs.hasOwnProperty(key)) {
        return scramble(scrambledEggs[key], rotations, true);
    }
    return 'Unknown Key';
}

function scramble(plaintext, rotations, reverse) {
    if (isNaN(rotations) || rotations === 0) {
        return "Unspecified. Check values and try again.";
    }

    // Calculate the size of the grid
    let gridSize = Math.ceil(Math.sqrt(plaintext.length));
    if (gridSize % 2 === 0) {
        gridSize += 1;
    }
    const rings = Math.floor(gridSize/2);

    // Create the grid
    let grid = [];
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = "";
        }
    }

    // Arrange the plaintext into the grid
    for (let i = 0; i < gridSize*gridSize; i++) {
        const row = i % gridSize;
        const col = Math.floor(i / gridSize);
        grid[row][col] = (i < plaintext.length) ? plaintext[i] : ' ';
    }

    // Manipulate the grid
    for (let i = 0; i < rings; i++) {
        let ring = getRing(grid, i);
        const rots = rotations + rings - i;
        const rev = reverse ? 1 : 0;
        for (let j = 0; j < rots; j++) {
            if ((i + rev) % 2 === 0) {
                ring = clockwiseShift(ring);
            }
            else {
                ring = counterclockwiseShift(ring);
            }
        }
        grid = putRing(grid, i, ring);
    }

    // Read the grid back out to a string
    let result = '';
    for (let i = 0; i < gridSize*gridSize; i++) {
        const row = i % gridSize;
        const col = Math.floor(i / gridSize);
        result += grid[row][col];
    }

    return result.trimEnd();
}

function putRing(grid, distance, ring) {
    const gridSizeMinusOne = grid.length - 1;
    if (distance < 0 || distance > Math.floor(grid.length/2)) {
        return grid;
    }

    const pad = distance;
    let ringIndex = 0;

    // Top row left->right
    for (let i = distance; i < gridSizeMinusOne-pad; i++) {
        grid[i][distance] = ring.substr(ringIndex, 1);
        ringIndex++;
    }

    // Right column top->bottom
    for (let i = distance; i < gridSizeMinusOne-pad; i++) {
        grid[gridSizeMinusOne-distance][i] = ring.substr(ringIndex, 1);
        ringIndex++;
    }

    // Bottom row right->left
    for (let i = gridSizeMinusOne-pad; i > distance; i--) {
        grid[i][gridSizeMinusOne-distance] = ring.substr(ringIndex, 1);
        ringIndex++;
    }

    // Left column bottom->top
    for (let i = gridSizeMinusOne-pad; i > distance; i--) {
        grid[distance][i] = ring.substr(ringIndex, 1);
        ringIndex++;
    }

    return grid;
}

function getRing(grid, distance) {
    const gridSizeMinusOne = grid.length - 1;
    if (distance < 0 || distance > Math.floor(grid.length/2)) {
        return '';
    }

    const pad = distance;
    let ring = '';

    // Top row left->right
    for (let i = distance; i < gridSizeMinusOne-pad; i++) {
        ring += grid[i][distance];
    }

    // Right column top->bottom
    for (let i = distance; i < gridSizeMinusOne-pad; i++) {
        ring += grid[gridSizeMinusOne-distance][i];
    }

    // Bottom row right->left
    for (let i = gridSizeMinusOne-pad; i > distance; i--) {
        ring += grid[i][gridSizeMinusOne-distance];
    }

    // Left column bottom->top
    for (let i = gridSizeMinusOne-pad; i > distance; i--) {
        ring += grid[distance][i];
    }

    return ring;
}

function clockwiseShift(text) {
    const lastLetter = text[text.length - 1];
    const newString = text.slice(0, -1);
    return lastLetter + newString;
}

function counterclockwiseShift(text) {
    const firstLetter = text[0];
    const newString = text.slice(1);
    return newString + firstLetter;
}