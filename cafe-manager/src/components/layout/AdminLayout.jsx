import Layout from './Layout';

const AdminLayout = () => {
  return (
    <Layout isAdmin={true}>
      <div className="bg-amber-50 min-h-screen">
        {/* Contenu admin spécifique */}
      </div>
    </Layout>
  );
};

export default AdminLayout;