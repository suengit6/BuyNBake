    function bookmarkRecipe(recipeId) {
        // Get userAccount from local storage
        const storedUserAccount = JSON.parse(localStorage.getItem('userAccount'));

        // Check if userAccount exists and has a user ID
        if (storedUserAccount && storedUserAccount.userId) {
            const userId = storedUserAccount.userId;

            // Create a unique key for the recipe bookmark using the user's ID
            const bookmarkKey = `bookmark_${userId}`;

            // Get existing bookmarks from local storage or initialize an empty array
            const existingBookmarks = JSON.parse(localStorage.getItem(bookmarkKey)) || [];

            // Check if the recipe is already bookmarked
            if (!existingBookmarks.includes(recipeId)) {
                // If not, add the recipe ID to the bookmarks
                existingBookmarks.push(recipeId);

                // Update the local storage with the new bookmarks
                localStorage.setItem(bookmarkKey, JSON.stringify(existingBookmarks));
                alert('Recipe bookmarked!');
            } else {
                alert('Recipe already bookmarked!');
            }
        } else {
            alert('User information not found or incomplete. Please log in.');
        }
    }

    function unbookmarkRecipe(recipeId) {
        // Get userAccount from local storage
        const storedUserAccount = JSON.parse(localStorage.getItem('userAccount'));

        // Check if userAccount exists and has a user ID
        if (storedUserAccount && storedUserAccount.userId) {
            const userId = storedUserAccount.userId;

            // Create a unique key for the recipe bookmark using the user's ID
            const bookmarkKey = `bookmark_${userId}`;

            // Get existing bookmarks from local storage or initialize an empty array
            const existingBookmarks = JSON.parse(localStorage.getItem(bookmarkKey)) || [];

            // Check if the recipe is bookmarked
            const index = existingBookmarks.indexOf(recipeId);
            if (index !== -1) {
                // If bookmarked, remove the recipe ID from bookmarks
                existingBookmarks.splice(index, 1);

                // Update the local storage with the updated bookmarks
                localStorage.setItem(bookmarkKey, JSON.stringify(existingBookmarks));
                alert('Recipe unbookmarked!');
            } else {
                alert('Recipe not bookmarked.');
            }
        } else {
            alert('User information not found or incomplete. Please log in.');
        }
    }