class Validator(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        seen = dict()
        for row in range(9):
            for col in range(9):
                num = board[row][col]
                if num != '.':
                    rowName = num+'row'+str(row)
                    colName = num+'col'+str(col)
                    blockName = num+'block'+str(row/3) +'and'+str(col/3)
                    if rowName in seen:
                        return False
                    elif  colName in seen:
                        return False
                    elif blockName in seen:
                        return False
                    else:
                        seen[rowName] = 1
                        seen[colName] = 1
                        seen[blockName] = 1
        
        return True
                    