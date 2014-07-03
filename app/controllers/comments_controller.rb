class CommentsController < ApplicationController
    
  def index
    @comments = Comment.all
  end

  def new
  	@comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      #sign_in @user - removed so new user isn't logged in
      flash[:success] = "Comment Created: " + @comment.comment_description
      redirect_to comments_url
    else
      render 'new'
    end
  end

   def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      flash[:success] = @comment.comment_description + " updated"
      redirect_to comments_url
    else
      render 'edit'
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    Comment.find(params[:id]).destroy
    flash[:success] = @comment.comment_description + " has been deleted."
    redirect_to comments_url
  end 

private

    def comment_params
      # might need to remove :role_id from this - see section 9.4.2
      # "Revisiting strong parameters"
      params.require(:comment).permit(:comment_description)
    end

end