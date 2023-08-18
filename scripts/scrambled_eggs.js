const scrambledEggs = {
    //test uses 13 as the rotations
    'test': `    hksljddjkaiEcljAf kedhjnarblf Cp !cdel k wrmh e ,sb j tvagj .vijha ajh.mko fjqhA iekae jfm kelhlffekb  ab j jd akd fefmjfe jbliimcdeaajc  Esu f b najbgecmVflaafdrj  aa  abjbecbfd f kjle  bjia   e aahxn.rfif jjbrrsrkhvj g jj f   a nf fhaje  je.ja mi inefjqrbjdro vf akk  lmrllhabk jbae n soa a   r dicju Ek me  j fhdb tjhhir f fpjtjf mfkvbviojli fjhpsjta hieamaeaffqfki ifr   hv j lkjdafl cdetkoqpe ka kmbai  dkrl  tjkeiajial   dcq  nciff`,
    'test_title': `xampuE ze l l  z eP`,
    'kaj': `  !jak    .oics  esatvf em rob ool ainoeauIfr attG .uoy td   us oIiaw ye sT t ufoad alrieh  o i  evfdc si uinra erth yss o  rnat el  i  Yc od yokcatTm   yf hcugnnhmeK!h knahT !mehs jgTwosetseb mseaK rofeoohao aonorgnt  asi eg`,
    'tbday': `            hqs.qhh svbj             b s  !qgeninobx hy u p yt bl oonv ssL x q h  vaxreibq gh w    gv lrh  l byx q exrsbevbhqlg u v e yeyb oezauqbxslhby  nieltyyi bbn l bb qgineoshezhorsEbux teqnss i bt rvds Tel biuybgu wqbnuqsoqnhin h bhhnbhbubbn qoroyw,ero q whsyiq  sbx Y .qnb rneya hqeqgiqnlnu ogtt.bbbg  usnv bqyp y bhsusnb re biry gvg nrs l obx qboxryi zr`,
    'tbday_title': `lzyr'euP T dhto B snzaiai`,
    'tbday_quiz': ``,
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