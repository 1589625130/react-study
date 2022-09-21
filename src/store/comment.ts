import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/index'
import { apiEditComment, apiGetCommentList } from '@/api/comment'

interface CommentState {
  list: Array<CommentModel>
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: CommentState = {
  list: [],
  status: 'idle',
}

export const getCommentList = createAsyncThunk('comment/getCommentList', async (params: {} = {}) => {
  const response = await apiGetCommentList(params)
  console.log('g"getCommentList"response)
 ; return response.data
})

export const editComment = createAsyncThunk('comment/editComment', async (data: CommentModel) => {
  const response = await apiEditComment(data)
  return response.data
})

const comment = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<CommentModel>) => {
      state.list.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentList.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCommentList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(getCommentList.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.list = state.list.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload
          }
          return item
        })
      })
  },
})

export const { addComment } = comment.actions

export const selectCommentList = (state: RootState) => state.comment.list
export const selectCommentStatus = (state: RootState) => state.comment.status;
export const selectCommentById = createSelector([selectCommentList, (_: RootState, id: string) => id], (list, id) =>
  list.find((item) => item.id === id)
);

export default comment.reducer
