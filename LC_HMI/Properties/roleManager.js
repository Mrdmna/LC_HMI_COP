<script type="text/javascript">
  // Kullanıcı rolünü localStorage'da sakla
  function setRole(role) {
    window.localStorage.setItem('role', role);
  }
  // Rolü al
  function getRole() {
    return window.localStorage.getItem('role');
  }
  // Çıkışta rolü temizle
  function clearRole() {
    window.localStorage.removeItem('role');
  }
  // Giriş işlemi örneği (login ekranında çağrılır)
  function handleLogin(user, pass) {
    if(user === 'Admin' && pass === '1') {
      setRole('Admin');
      // ... Admin ekranına yönlendir
    } else if(user === 'User' && pass === '2') {
      setRole('User');
      // ... User ekranına yönlendir
    } else {
      // ... Hatalı giriş
    }
  }
  // Her ekranda rol kontrolü örneği
  function showForRole(role, elementId) {
    if(getRole() !== role) {
      var el = document.getElementById(elementId);
      if(el) el.style.display = 'none';
    }
  }
  // Örnek: showForRole('Admin', 'adminPanel');
</script>
