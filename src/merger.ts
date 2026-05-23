function mergeTwoAscendings(arr1: number[], arr2: number[]){
    const merged: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i]! < arr2[j]!){
            merged.push(arr1[i]!);
            i++;
        } else {
            merged.push(arr2[j]!);
            j++;
        }
    }
    while (i < arr1.length){
        merged.push(arr1[i]!);
        i++;
    }
    while (j < arr2.length){
        merged.push(arr2[j]!);
        j++;
    }
    return merged;
}

export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
):number[] {
    // Invert collection_2 to make it ascending
    const col2Ascending: number[] = [];
    for (let i = collection_2.length - 1; i >= 0; i--){
        col2Ascending.push(collection_2[i]!);
    }
    // Merge collection_1 and col2Ascending first, then merge the result with collection_3
    const merged1and2 = mergeTwoAscendings(collection_1, col2Ascending);
    return mergeTwoAscendings(merged1and2, collection_3);
}