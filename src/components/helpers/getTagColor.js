export const onGetCompany = (company) => {
    switch (company) {
      case 1:
        return { name: 'Nintendo', color: 'danger' };

      case 2:
        return { name: 'PlayStation', color: 'info' };

      case 3:
        return { name: 'X-BOX', color: 'success' };

      case 4:
        return { name: 'PC', color: 'warning' };

      default:
        return { name: 'Sin Compañia', color: 'primary' };
    }
  };