import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Divider, Grid, Menu, Segment, Sidebar } from "semantic-ui-react";
import categories from "../../../datas/categories";
import "./categoriessidebar.css";
const CategoriesSidebar = ({
  selectedCategory,
  setActiveMenu,
  setDropdownValue,
  products,
  setFilteredProducts,
  setSelectedCategory,
  sidebarVisible,
  setSidebarVisible,
  children,
}) => {
  useEffect(() => {
    if (selectedCategory) {
      setActiveMenu("");
      setDropdownValue("");
      setFilteredProducts([]);
      setFilteredProducts(
        products.filter((p) => p.type === selectedCategory.slug)
      );
    }
    if (selectedCategory.slug === "vins") {
      setActiveMenu("rouges");
      setDropdownValue("patrimonio-r");
      setFilteredProducts(products.filter((p) => p.subCategory === "patrimonio-r"));
    }
    if (selectedCategory.slug === "alcools") {
      setActiveMenu("apéritifs");
    }
    if (selectedCategory.slug === "cuisine") {
      setActiveMenu("entrées");
    }
  }, [selectedCategory]);
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            style={{ background: "#2B2B29" }}
            as={Menu}
            animation="overlay"
            icon="labeled"
            onHide={() => setSidebarVisible(false)}
            onShow={() => setSidebarVisible(true)}
            vertical
            visible={sidebarVisible}
            width="thin"
          >
            <Link to={`/`} onClick={() => setSelectedCategory({})}>
              <Menu.Item className="categories-sidebar-item">
                <Menu.Header>
                  <img width="100px" src="./assets/images/logo.png" alt="" />
                </Menu.Header>
              </Menu.Item>
            </Link>
            <Divider />
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/categories/${category.slug}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSidebarVisible(false);
                }}
              >
                <Menu.Item className="categories-sidebar-item">
                  <Menu.Header>{category.icon}</Menu.Header>
                  <span>{category.name}</span>
                </Menu.Item>
              </Link>
            ))}
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarVisible}>
            <Segment basic>{children}</Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default CategoriesSidebar;
