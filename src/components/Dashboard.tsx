import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import GradientButtonComponent from './GradientButton';
import FormInput from './FormInput';
import { shortenUrl, getUrls, deleteUrl } from '../utils/api';
import UrlTable from './ShortenedUrlsTable';
import { useNavigate } from 'react-router-dom'; 
import Features from './Features'; 

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); 
  const [urls, setUrls] = useState<any[]>([]);  
  const [inputValue, setInputValue] = useState<string>('');  
  const [shortenedUrl, setShortenedUrl] = useState<string>('');  
  const [error, setError] = useState<string>('');  

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [urlToDelete, setUrlToDelete] = useState<string>('');

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await getUrls();
        console.log('Fetched URLs:', response);  

        const fetchedUrls = response.userUrls || [];

        const transformedUrls = fetchedUrls.map((url: any) => ({
          id: url._id,
          shortenedUrl: `http://localhost:5000/api/url/${url.shortHash}`,
          originalUrl: url.originalUrl,
          clicks: url.visitCount,
          createdAt: new Date(url.createdAt).toLocaleString(),
        }));

        setUrls(transformedUrls);
      } catch (err: any) {
        console.error("Error fetching URLs:", err);
      }
    };

    fetchUrls();
  }, []);

  const handleDelete = async () => {
    try {
      
      await deleteUrl(urlToDelete);

      setUrls(urls.filter((url) => url.shortenedUrl.split('/').pop() as string !== urlToDelete));  
      setOpenDeleteDialog(false);
    } catch (err: any) {
      console.error('Error deleting URL:', err);
    }
  };

  
  const handleButtonClick = async () => {
    setError('');  

    try {
      const response = await shortenUrl(inputValue);  

      setShortenedUrl(response.shortenedUrl);  

    
      setUrls([
        ...urls,
        {
          originalUrl: inputValue,
          shortenedUrl: response.shortUrl,
          clicks: 0,
          createdAt: new Date().toLocaleString(),
        }
      ]);
    
      setInputValue(''); 
    } catch (err: any) {
      setError(err.message);  
    }
  };

  const openConfirmationDialog = (shortHash: string) => {
    setUrlToDelete(shortHash);
    setOpenDeleteDialog(true);
  };

  const closeConfirmationDialog = () => {
    setOpenDeleteDialog(false);
  };

  const openLogoutConfirmationDialog = () => {
    setOpenLogoutDialog(true);
  };

  const closeLogoutConfirmationDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    sessionStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#141415', minHeight: '100vh' }}>
      <Button
        onClick={openLogoutConfirmationDialog}
        sx={{
          color: '#fff',
          backgroundColor: '#9e0aff',
          position: 'absolute',
          top: '20px',
          right: '20px',
          '&:hover': {
            backgroundColor: '#7a00e2',
          },
        }}
      >
        Logout
      </Button>

      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#9e0aff' }}>
        Welcome to the Dashboard!
      </Typography>
      <Features /> 
      <Typography variant="h6" align="center" sx={{ color: '#fff', marginBottom: '40px' }}>
        Your one-stop solution to manage URLs and analytics.
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={8} sm={6} md={4}>
          <FormInput
            label="Enter Original URL"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            height="45px"
          />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <GradientButtonComponent onClick={handleButtonClick} text="Shorten Url" />
        </Grid>
      </Grid>

      {shortenedUrl && (
        <Typography variant="h6" align="center" sx={{ color: '#9e0aff', marginTop: '20px' }}>
          Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#9e0aff' }}>
            {shortenedUrl}
          </a>
        </Typography>
      )}

      <br /><br />

      {urls.length > 0 ? (
        <UrlTable data={urls} onDelete={openConfirmationDialog} />
      ) : (
        <Typography align="center" sx={{ color: '#fff' }}>
          No URLs found.
        </Typography>
      )}

      <Dialog open={openDeleteDialog} onClose={closeConfirmationDialog}>
        <DialogTitle sx={{ backgroundColor: '#37383f', color: '#fff' }}>
          Confirm Deletion
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#37383f', color: '#fff' }}>
          <Typography>Are you sure you want to delete this URL?</Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#37383f' }}>
          <Button onClick={closeConfirmationDialog} sx={{ color: '#9e0aff' }}>
            Cancel
          </Button>
          <Button onClick={handleDelete} sx={{ color: '#9e0aff' }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      
      <Dialog open={openLogoutDialog} onClose={closeLogoutConfirmationDialog}>
        <DialogTitle sx={{ backgroundColor: '#37383f', color: '#fff' }}>
          Confirm Logout
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#37383f', color: '#fff' }}>
          <Typography>Are you sure you want to log out?</Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#37383f' }}>
          <Button onClick={closeLogoutConfirmationDialog} sx={{ color: '#9e0aff' }}>
            Cancel
          </Button>
          <Button onClick={handleLogout} sx={{ color: '#9e0aff' }}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
