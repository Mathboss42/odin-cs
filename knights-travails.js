class Knight {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Board {
    constructor(size) {
        this.boardSize = size;
    }

    // getPossibleMoves(knightPos, result = []) {
    //     // console.log('knightPos', knightPos);
    //     if (knightPos[0] < 0 || knightPos[1] < 0 || knightPos[0] > this.boardSize || knightPos[1] > this.boardSize) {
    //         console.log('asdasd')
    //         return result;
    //     } else if (result.includes(knightPos)) {
    //         return result;
    //     }

    //     result.push(knightPos);

    //     const a = this.getPossibleMoves(this.getMove(knightPos, 1), result);
    //     const b = this.getPossibleMoves(this.getMove(knightPos, 2), result);
    //     const c = this.getPossibleMoves(this.getMove(knightPos, 3), result);
    //     const d = this.getPossibleMoves(this.getMove(knightPos, 4), result);
    //     const e = this.getPossibleMoves(this.getMove(knightPos, 5), result);
    //     const f = this.getPossibleMoves(this.getMove(knightPos, 6), result);
    //     const g = this.getPossibleMoves(this.getMove(knightPos, 7), result);
    //     const h = this.getPossibleMoves(this.getMove(knightPos, 8), result);
        
    //     console.log(a);
    //     return [...result, a, b, c, d, e, f, g, h];
    // }

    // getMove(pos, a) {
    //     switch (a) {
    //         case 1:
    //             return [pos[0] + 1, pos[1] + 2];
    //         case 2:
    //             return [pos[0] + 2, pos[1] + 1];
    //         case 3:
    //             return [pos[0] + 2, pos[1] - 1];
    //         case 4:
    //             return [pos[0] + 1, pos[1] - 2];
    //         case 5:
    //             return [pos[0] - 1, pos[1] - 2];
    //         case 6:
    //             return [pos[0] - 2, pos[1] - 1];
    //         case 7:
    //             return [pos[0] - 2, pos[1] + 1];
    //         case 8:
    //             return [pos[0] - 1, pos[1] + 2];
    //     }
    // }


    isOnBoard(x, y, size = this.boardSize) {
        if (x >= 1 && x <= size && y >= 1 && y <= size) {
            return true;
        } else {
            return false;
        }
    }

    findPath(x, y, destX, destY, size = this.boardSize) {
        const xDirection = [-2, -1, 1, 2, -2, -1, 1, 2];
        const yDirection = [-1, -2, -2, -1, 1, 2, 2, 1];

        // console.log(x, y)

        let queue = [];
        queue.push([[x, y], [x, y]]);
        
        // console.log(queue);

        const visited = [[x, y]];
        
        let moves = [[[x, y], [x, y]]];
        
        while (queue.length > 0) {
            // console.log('queue', queue);
            const current = queue.shift();
            // console.log('current', current);

            // console.log('current[]', current[0], current[1])
            // console.log('dest', destX, destY);

            // console.log(current[0] === destX && current[1] === destY);

            if (current[0][0] === destX && current[0][1] === destY) {
                // console.log('hehe')
                moves.push([current[0], current[1]]);
                let result = this.getPreviousRec(moves, [current[0][0], current[0][1]]);
                // return moves;
                // console.log('result', result);
                // console.log('end');
                console.log(result);
                return result;
            }

            for (let i = 0; i < 8; i++) {
                // console.log('for',current[0][0], xDirection[i], current[1], yDirection[i])
                const newX = current[0][0] + xDirection[i];
                // console.log('newX', newX)
                const newY = current[0][1] + yDirection[i];
                // console.log('newY', newY)
                if (this.isOnBoard(newX, newY) && !visited.includes([newX, newY])) {
                    // console.log('bonjour', newX)
                    visited.push([newX, newY]);
                    moves.push([[newX, newY], [current[0][0], current[0][1]]]);
                    // moves[moves.indexOf(current[0])] = newX;
                    // moves[moves.indexOf(current[1])] = newY;
                    // console.log(moves);
                    queue.push([[newX, newY], [current[0][0], current[0][1]]]);
                }
            }

        }
        return -1;
    }

    getPreviousRec(moves, firstMove, move = moves[moves.length-1], path = []) {
        if (move[0][0] === move[1][0] && move[0][1] === move[1][1]) {
            path.unshift(firstMove);
            // console.log('firstmove', firstMove);
            console.log('return path', path.reverse());
            return path.reverse();
        }
        // console.log('move', move)
        path.push(move[1]);
        // console.log('path', path);
        // const as = moves[moves.indexOf(move)];
        const asd = moves.filter(el => el[0][0] === move[1][0] && el[0][1] === move[1][1]).flat();
        // console.log(asd);
        this.getPreviousRec(moves, firstMove, move = asd, path);
    }

}

const knight = new Knight(5, 9);
const board = new Board(8);

// console.log(board.boardSize);

// console.log(board.isOnBoard(0, 7));

// console.log(board.findPath(knight.x, knight.y, 1, 1));

board.findPath(knight.x, knight.y, 1, 1);
board.findPath(knight.x, knight.y, 3, 2);

// console.log(knight.pos)
// console.log(board.getMove(knight.pos, 1));

// const possibleMoves = board.getPossibleMoves(knight.pos);
// console.log(possibleMoves);