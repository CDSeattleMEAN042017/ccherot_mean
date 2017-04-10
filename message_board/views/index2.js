<html>
    <head>
        <title>The Dojo Message Board</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="titleDiv" class="titleDivClass">The Dojo Message Board</div>
        
        <form action="/new_post"  method="post" id="postForm" class="postFormClass">
            <label id="postNameLabel" class="labelClass">Name:</label><br>
            <input type="text" class="inputTextClass"><br>
            <label id="messageLabel" class="labelClass">Message:</label><br>
            <input type="HTMLTextAreaElement" class="inputTextAreaClass"><br>
            <input type='submit' value='Post Message' class="submitClass">
        </form>
        <div id="postListDiv" class="postListClass">
            <!-- <label id="usersListTitle" class="labelClass">Users:</label><br>-->
            <% for (i = 0; i < usersArr.length; i++) { %>
                <label id="postNameLabel" class="postNameLabelClass">Name: </label><label id="post<%=i%>" class="labelClass"><%=postsArr[i].name%></label><br>
                <label id="messageLabel" class="messageLabelClass">Message: </label><label id="message<%=i%>" class="messageTextClass"><%=postsArr[i].text</label><br>
                <!-- now we loop throug the comments of this post -->
                <% for (j = 0; j < arr[i].comments.length; j++) { %>
                    <label id="commentNameLabel" class="commentLabelClass">Name:</label><label id="commentName" class="commentNameClass">arrPosts[i].comments[i].name</label><br>
                    <label id="commentMessageLabel" class="commentLabelClass">Message:</label><label id="commentMessage" class="commentMessageClass">arrPosts[i].comments[i].text</label><br>
                <% } %>
                <form action='/new_comment' id="commentForm" method='post' class="commentFormClass">
                    <br>
                    <label id="nameLabel" class="labelClass">Name:</label> 
                    <input type='text' name='name' class="inputClass"><br>
                    <label id="commentLabel"class="commentLabelClass" >Comment:</label><br> 
                    <input type='HTMLTextAreaElement' name='comment' class="inputCommentTextAreaClass"><br>
                    <input type='submit' value='Post Comment' class="submitClass">
                </form>
            <% } %>
        </div>
    </body>
</html>