export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), 
    });

    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.accessToken) {
      localStorage.setItem('token', data.accessToken);
    } else {
      throw new Error('Access token is missing in the response');
    }

    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Login failed. Please try again.');
  }
};


export const signupUser = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:5000/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ email, password }),
    });


    if (!response.ok) {
      throw new Error(`Signup failed with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Signup error:', error);
    throw new Error('Signup failed. Please try again.');
  }
};



export const shortenUrl = async (originalUrl: string) => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('Authentication token is missing.');
    }

    const response = await fetch('http://localhost:5000/api/url/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ originalUrl }),
    });

    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error shortening URL:', error);
    throw new Error('Error shortening URL. Please try again.');
  }
};
export const getUrls = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token is missing.');
    }
     
    const response = await fetch('http://localhost:5000/api/url/manage/urls', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });
     
    if (!response.ok) {
      throw new Error('Failed to fetch URLs');
    }
     
    const data = await response.json();
    console.log("Fetched URLs:", data);
    
    return data;
  } catch (error) {
    console.error("Error fetching URLs:", error);
    throw error;
  }
};

export const deleteUrl = async (shortHash: string) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token is missing.');
    }

    const response = await fetch(`http://localhost:5000/api/url/manage/${shortHash}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete URL');
    }

    const data = await response.json();
    console.log('URL deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting URL:', error);
    throw new Error('Error deleting URL. Please try again.');
  }
};
