# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Rails follows a RESTful pattern for interaction between the client and the server.
# BlogPost model comes with BlogPosts_controller.
# M-Model(data)<-->V-View(Interface)<-->C-Controller(Operations)

# WebServer()<--RESTful pattern-->Software
# There are 7 different RESTful routes pattern to follow when creating an application 
# or web service that will interact with the server: 
# index, new, create, show, eidt, update, and destroy.
class BlogPostsController < ApplicationController
  def index
    # ---2)The controller method index represent the 'Read' in CRUD-list all the items/.all
    # GET /blogposts
    @posts = BlogPost.all
  end

  def show
    # ---3)The controller method show represent the 'Read' in CRUD-list one item by params.
    # GET /blogposts/:id
    @post = BlogPost.find(params[:id])
  end

  def new
    # ---4)The controller method new represent the midway point between 'Create/Read' in CRUD-display a form to browser.
    # GET /blogposts/new
    @post = Post.new
  end

  def create
    # ---5)The controller method create represent the 'Create' in CRUD-add info to the database.
    # POST /blogposts
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)The controller method edit represent the midway point between 'Read/Update' in CRUD-get a form to browser(user).
    # GET /blogposts/:id/edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)The controller method update represent 'Update' in CRUD-modifying information in the database.
    # PATCH/PUT /blogposts/:id
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)The controller method destroy represent 'Delete' in CRUD-removing information in the database.
      # DELETE /blogposts/:id
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)Using private methods to set up params, which are always called within the context of self or the calling objects of the same class.
  private
  def blog_post_params
    # ---10)Strong parameters are used to increase the security of data sent through forms.
    # Strong params allow developers to specify in the controller which parameters are accepted and used.
    # The require method ensures that a specific parameters is present, and if it's not provided, the require method throws an error.
    # The permit method returns a copy of the parameters object,returning only the permitted keys and values.
    params.require(:blog_post).permit(:title, :content)
  end
end
