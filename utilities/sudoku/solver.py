class SudokuSolver(object):
    def solveSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
        
        self.solver(board)
    
    def solver(self, board):
        for i in range(9):
            for j in range(9):
                if (board[i][j] == '.'):
                    count = '1'
                    while (int(count) <= 9):
                        if self.isValid(i,j,board, count):
                            board[i][j] = count
                            if self.solver(board):
                                return True
                            else:
                                board[i][j] = '.'
                        count = str(int(count) + 1)
                    
                    return False
                
        return True

    
    def isValid(self, row, col, board, c):
        for i in range(9):
            if board[row][i] == c:
                return False
            
        for i in range(9):
            if board[i][col] == c:
                return False
            
        startRow = int(row/3)*3
        startCol = int(col/3)*3
        
        for i in range(3):
            for j in range(3):
                if (board[startRow+i][startCol+j] == c):
                    return False
        
        return True