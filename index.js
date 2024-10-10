function generateRandomContributionStats() {

    const contribution = [];
    const levels = [0, 0, 0, 3, 5, 10];
    
    for( let i = 0; i < 52; i++ ){
        const week = [];
        for( let j = 0; j < 7; j++ ){
            //(Math.random() * levels.length) generates a number between 0 and 5. We need numbers between 0 and 5
            //because the levels array has 6 elements with index 0 to 5 inclusive.
            week.push(levels[Math.floor(Math.random() * levels.length)]);
        }
        contribution.push(week);
    }

    return contribution;
}

function makeGraph() {

    const graph = document.querySelector('.graph');
    const contribution = generateRandomContributionStats();

    function callbackFn( level ){
        let square = document.createElement('li');
        square.classList.add('square');
        square.dataset.value = level;

        graphWeek.appendChild(square);
    }

    for( let i = 0; i < 52; i++){
        var graphWeek = document.createElement('ul');
        graphWeek.classList.add(`week-${i + 1}`);

        contribution[i].forEach(callbackFn);
        graph.appendChild(graphWeek);
    }

    const ulElements = graph.children;
    
    // Convert the HTMLCollectionObject to an Array object using the from() method in Array object to print all the children of each ul.

    // Array.from(ulElements).forEach( ul => {
    //     console.group(ul.className);
    //         console.log(ul.children);
    //     console.groupEnd();
    // })

    // Use the length property of the HTMLCollection object and the item() method to print all the children of each ul.

    // for( let i = 0; i < graph.children.length; i++){
    //     const ul = graph.children.item(i);

    //     console.group(ul.className);
    //         console.log(ul.children);
    //     console.groupEnd();
    // }
}

makeGraph()