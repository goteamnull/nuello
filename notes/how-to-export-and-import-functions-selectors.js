export function getListsByBoardId(state, id) 

export default function getListsByBoard(state, id)

// on the imported side
import { getListsByBoardId } from '../../selectors/listSelectors' // with named export, {} destructures
// creates a variable with the destructured name
import whateverName from '../../selectors/listSelectors' // with default export
import * as selectors from '../../selectors/listSelectors' // imports everything
// selectors becomes the object that has all the exports on it
selectors.getListsByBoardId(someState, anId)